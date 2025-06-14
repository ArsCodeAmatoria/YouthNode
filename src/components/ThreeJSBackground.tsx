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
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<THREE.Points[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create canvas texture for billboard points
    const createCircleTexture = (color: string, size: number = 64) => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext('2d')!;
      
      // Create radial gradient
      const gradient = context.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, color.replace('1)', '0.5)'));
      gradient.addColorStop(1, color.replace('1)', '0)'));
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, size, size);
      
      return new THREE.CanvasTexture(canvas);
    };

    // Create different colored textures
    const textures = [
      createCircleTexture('rgba(255, 255, 255, 1)'), // White
      createCircleTexture('rgba(255, 20, 147, 1)'), // Hot pink
      createCircleTexture('rgba(255, 105, 180, 1)'), // Hot pink light
      createCircleTexture('rgba(199, 21, 133, 1)'), // Medium violet red
    ];

    // Create multiple point systems
    const pointSystems: THREE.Points[] = [];
    const numSystems = 4;
    const pointsPerSystem = 500;

    for (let s = 0; s < numSystems; s++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsPerSystem * 3);
      const colors = new Float32Array(pointsPerSystem * 3);
      const sizes = new Float32Array(pointsPerSystem);

      // Generate random positions and properties
      for (let i = 0; i < pointsPerSystem; i++) {
        // Position
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

        // Colors - vary based on system
        const baseColor = new THREE.Color();
        switch (s) {
          case 0:
            baseColor.setHSL(0, 0, 0.8 + Math.random() * 0.2); // White variations
            break;
          case 1:
            baseColor.setHSL(0.92, 0.9, 0.6 + Math.random() * 0.3); // Hot pink variations
            break;
          case 2:
            baseColor.setHSL(0.88, 0.8, 0.7 + Math.random() * 0.3); // Hot pink light variations
            break;
          case 3:
            baseColor.setHSL(0.85, 0.85, 0.5 + Math.random() * 0.3); // Medium violet red variations
            break;
        }
        
        colors[i * 3] = baseColor.r;
        colors[i * 3 + 1] = baseColor.g;
        colors[i * 3 + 2] = baseColor.b;

        // Sizes
        sizes[i] = 10 + Math.random() * 20;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      // Create material with billboard texture
      const material = new THREE.PointsMaterial({
        size: 15,
        map: textures[s],
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        alphaTest: 0.1
      });

      const points = new THREE.Points(geometry, material);
      pointSystems.push(points);
      scene.add(points);
    }

    pointsRef.current = pointSystems;

    camera.position.set(0, 0, 50);

    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !rendererRef.current || !cameraRef.current) {
        return;
      }
      
      const time = Date.now() * 0.001;
      
      // Animate each point system
      pointsRef.current.forEach((points, index) => {
        if (points) {
          // Rotate each system differently
          points.rotation.x = time * (0.1 + index * 0.05);
          points.rotation.y = time * (0.15 + index * 0.03);
          points.rotation.z = time * (0.05 + index * 0.02);
          
          // Subtle scaling animation
          const scale = 1 + Math.sin(time * 2 + index) * 0.1;
          points.scale.setScalar(scale);
          
          // Update individual point positions for floating effect
          const positions = points.geometry.attributes.position.array as Float32Array;
          const originalPositions = points.userData.originalPositions;
          
          if (!originalPositions) {
            // Store original positions on first run
            points.userData.originalPositions = new Float32Array(positions.length);
            points.userData.originalPositions.set(positions);
          } else {
            // Apply floating motion
            for (let i = 0; i < positions.length; i += 3) {
              positions[i] = originalPositions[i] + Math.sin(time * 2 + i * 0.01) * 2;
              positions[i + 1] = originalPositions[i + 1] + Math.cos(time * 1.5 + i * 0.01) * 2;
              positions[i + 2] = originalPositions[i + 2] + Math.sin(time * 1.8 + i * 0.01) * 2;
            }
            points.geometry.attributes.position.needsUpdate = true;
          }
        }
      });
      
      // Subtle camera movement
      cameraRef.current.position.x = Math.sin(time * 0.1) * 5;
      cameraRef.current.position.y = Math.cos(time * 0.15) * 3;
      cameraRef.current.lookAt(0, 0, 0);
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden && !animationIdRef.current) {
        animate();
      }
    };

    // Handle page focus
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
      
      // Dispose of geometries, materials, and textures
      pointSystems.forEach(points => {
        points.geometry.dispose();
        if (points.material instanceof THREE.PointsMaterial) {
          points.material.dispose();
          if (points.material.map) {
            points.material.map.dispose();
          }
        }
      });
      
      textures.forEach(texture => texture.dispose());
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      // Clear refs
      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      pointsRef.current = [];
    };
  }, []);

  // Additional effect to ensure animation restarts after navigation
  useEffect(() => {
    const checkAndRestart = () => {
      if (!animationIdRef.current && sceneRef.current && rendererRef.current && cameraRef.current) {
        const animate = () => {
          if (!sceneRef.current || !rendererRef.current || !cameraRef.current) {
            return;
          }

          const time = Date.now() * 0.001;
          
          // Continue animation logic
          pointsRef.current.forEach((points, index) => {
            if (points) {
              points.rotation.x = time * (0.1 + index * 0.05);
              points.rotation.y = time * (0.15 + index * 0.03);
              points.rotation.z = time * (0.05 + index * 0.02);
              
              const scale = 1 + Math.sin(time * 2 + index) * 0.1;
              points.scale.setScalar(scale);
              
              // Update positions
              const positions = points.geometry.attributes.position.array as Float32Array;
              const originalPositions = points.userData.originalPositions;
              
              if (originalPositions) {
                for (let i = 0; i < positions.length; i += 3) {
                  positions[i] = originalPositions[i] + Math.sin(time * 2 + i * 0.01) * 2;
                  positions[i + 1] = originalPositions[i + 1] + Math.cos(time * 1.5 + i * 0.01) * 2;
                  positions[i + 2] = originalPositions[i + 2] + Math.sin(time * 1.8 + i * 0.01) * 2;
                }
                points.geometry.attributes.position.needsUpdate = true;
              }
            }
          });
          
          cameraRef.current.position.x = Math.sin(time * 0.1) * 5;
          cameraRef.current.position.y = Math.cos(time * 0.15) * 3;
          cameraRef.current.lookAt(0, 0, 0);
          
          rendererRef.current.render(sceneRef.current, cameraRef.current);
          animationIdRef.current = requestAnimationFrame(animate);
        };
        
        animate();
      }
    };

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