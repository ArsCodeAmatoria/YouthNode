'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeJSBackgroundProps {
  className?: string;
}

export default function ThreeJSBackground({ className = '' }: ThreeJSBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // GLSL Shader - Planetary Timer
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float t;
      uniform vec2 r;
      
      void main() {
        vec2 FC = gl_FragCoord.xy;
        vec4 o = vec4(0.0);
        
        // Planetary timer GLSL art
        vec2 p = (FC.xy * 2.0 - r) / r.x * 0.25;
        vec3 C = vec3(0.0);
        
        for(float i = 1.0; i < 99.0; i++) {
          float j = i;
          vec2 q = p - vec2(
            sin(5.0 + cos(t * 0.5) + sin(t * 0.5) / j * 99.0) * 0.4,
            sin(t * 0.5 - j)
          ) * 0.1;
          C += 0.0025 / length(q * 5.0);
        }
        
        o += vec4(C, 0.0) - 0.008 / (length(p) - 0.108);
        o += -1.2;
        
        // Add Canadian color theme
        vec3 canadianColor = mix(
          vec3(0.8, 0.1, 0.1), // Maple red
          vec3(0.2, 0.6, 0.9), // Icy blue
          sin(t * 0.3 + length(p) * 3.0) * 0.5 + 0.5
        );
        
        o.rgb = mix(o.rgb, canadianColor, 0.3);
        o.a = clamp(o.r + o.g + o.b, 0.0, 0.8);
        
        gl_FragColor = o;
      }
    `;

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        t: { value: 0.0 },
        r: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    materialRef.current = material;

    // Create fullscreen quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop with proper checks
    const animate = () => {
      // Check if all references are still valid
      if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
        return;
      }

      materialRef.current.uniforms.t.value += 0.016; // ~60fps timing
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!rendererRef.current || !materialRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      rendererRef.current.setSize(width, height);
      materialRef.current.uniforms.r.value.set(width, height);
    };

    // Handle visibility change to ensure animation continues
    const handleVisibilityChange = () => {
      if (!document.hidden && !animationIdRef.current) {
        // Restart animation if it stopped
        animate();
      }
    };

    // Handle page focus to restart animation
    const handleFocus = () => {
      if (!animationIdRef.current) {
        animate();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      
      const currentMount = mountRef.current;
      if (currentMount && rendererRef.current?.domElement && currentMount.contains(rendererRef.current.domElement)) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      
      geometry.dispose();
      if (materialRef.current) {
        materialRef.current.dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      // Clear refs
      sceneRef.current = null;
      rendererRef.current = null;
      materialRef.current = null;
      cameraRef.current = null;
    };
  }, []);

  // Additional effect to ensure animation restarts after navigation
  useEffect(() => {
    const checkAndRestart = () => {
      if (!animationIdRef.current && materialRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
        const animate = () => {
          if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
            return;
          }

          materialRef.current.uniforms.t.value += 0.016;
          rendererRef.current.render(sceneRef.current, cameraRef.current);
          animationIdRef.current = requestAnimationFrame(animate);
        };
        
        animate();
      }
    };

    // Check immediately and after a short delay
    checkAndRestart();
    const timer = setTimeout(checkAndRestart, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 ${className}`}
      style={{ 
        pointerEvents: 'none',
        opacity: 0.6,
        zIndex: 1
      }} 
    />
  );
} 