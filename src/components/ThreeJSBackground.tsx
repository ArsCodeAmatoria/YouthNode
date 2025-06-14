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
  const linesRef = useRef<THREE.Line[]>([]);

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

    // Create multiple line systems with different patterns
    const lines: THREE.Line[] = [];
    const numLines = 8;
    const pointsPerLine = 200;

    // Color palette - consistent lime-green theme
    const colors = [
      new THREE.Color(0.9, 0.8, 0.2),  // bright lime-green
      new THREE.Color(0.8, 0.8, 0.9),  // bright tech-gray/blue
      new THREE.Color(0.6, 0.9, 0.3),  // lime-green variant
      new THREE.Color(1.0, 1.0, 1.0),  // pure white
    ];

    for (let i = 0; i < numLines; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsPerLine * 3);
      const lineColors = new Float32Array(pointsPerLine * 3);

      // Generate line path - different patterns for each line
      for (let j = 0; j < pointsPerLine; j++) {
        const t = j / (pointsPerLine - 1);
        const angle = t * Math.PI * 4 + (i * Math.PI * 0.25);
        const radius = 20 + i * 5;
        
        // Create flowing, organic paths
        const x = Math.sin(angle) * radius + Math.sin(angle * 3) * 5;
        const y = Math.cos(angle * 0.7) * radius * 0.5 + Math.sin(t * Math.PI * 6) * 10;
        const z = Math.sin(angle * 0.5) * 15 + Math.cos(t * Math.PI * 4) * 8;

        positions[j * 3] = x;
        positions[j * 3 + 1] = y;
        positions[j * 3 + 2] = z;

        // Color gradient along the line with higher intensity
        const color = colors[i % colors.length];
        const intensity = 0.6 + 0.4 * Math.sin(t * Math.PI); // Increased base intensity
        
        lineColors[j * 3] = color.r * intensity;
        lineColors[j * 3 + 1] = color.g * intensity;
        lineColors[j * 3 + 2] = color.b * intensity;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      // Set initial draw range to 0 (nothing visible)
      geometry.setDrawRange(0, 0);

      // Create line material with higher opacity and glow effect
      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.95, // Increased opacity
        linewidth: 3   // Thicker lines
      });

      const line = new THREE.Line(geometry, material);
      
      // Store animation data
      line.userData = {
        maxPoints: pointsPerLine,
        currentPoints: 0,
        speed: 0.5 + Math.random() * 1.5,
        phase: i * 0.3,
        direction: 1
      };

      lines.push(line);
      scene.add(line);
    }

    linesRef.current = lines;

    // Position camera
    camera.position.set(0, 0, 80);

    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !rendererRef.current || !cameraRef.current) {
        return;
      }
      
      const time = Date.now() * 0.001;
      
      // Animate each line's draw range
      linesRef.current.forEach((line, index) => {
        const userData = line.userData;
        
        // Calculate current draw range based on time and line-specific parameters
        const phase = time * userData.speed + userData.phase;
        const progress = (Math.sin(phase) + 1) * 0.5; // 0 to 1
        
        // Dynamic point count that creates flowing effect
        const targetPoints = Math.floor(progress * userData.maxPoints);
        userData.currentPoints = targetPoints;
        
        // Update draw range
        line.geometry.setDrawRange(0, Math.max(2, userData.currentPoints));
        
        // Rotate lines for dynamic movement
        line.rotation.x = time * 0.1 * (index % 2 === 0 ? 1 : -1);
        line.rotation.y = time * 0.15 + index * 0.2;
        line.rotation.z = time * 0.05 * (index % 3 === 0 ? 1 : -1);
        
        // Subtle scaling animation
        const scale = 0.8 + 0.2 * Math.sin(time * 2 + index);
        line.scale.setScalar(scale);
      });
      
      // Camera movement for dynamic perspective
      cameraRef.current.position.x = Math.sin(time * 0.1) * 10;
      cameraRef.current.position.y = Math.cos(time * 0.08) * 8;
      cameraRef.current.position.z = 80 + Math.sin(time * 0.12) * 15;
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
      
      // Dispose of geometries and materials
      lines.forEach(line => {
        line.geometry.dispose();
        if (line.material instanceof THREE.LineBasicMaterial) {
          line.material.dispose();
        }
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      // Clear refs
      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      linesRef.current = [];
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
          linesRef.current.forEach((line, index) => {
            const userData = line.userData;
            
            const phase = time * userData.speed + userData.phase;
            const progress = (Math.sin(phase) + 1) * 0.5;
            
            const targetPoints = Math.floor(progress * userData.maxPoints);
            userData.currentPoints = targetPoints;
            
            line.geometry.setDrawRange(0, Math.max(2, userData.currentPoints));
            
            line.rotation.x = time * 0.1 * (index % 2 === 0 ? 1 : -1);
            line.rotation.y = time * 0.15 + index * 0.2;
            line.rotation.z = time * 0.05 * (index % 3 === 0 ? 1 : -1);
            
            const scale = 0.8 + 0.2 * Math.sin(time * 2 + index);
            line.scale.setScalar(scale);
          });
          
          cameraRef.current.position.x = Math.sin(time * 0.1) * 10;
          cameraRef.current.position.y = Math.cos(time * 0.08) * 8;
          cameraRef.current.position.z = 80 + Math.sin(time * 0.12) * 15;
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
        opacity: 0.9,
        zIndex: 1
      }} 
    />
  );
} 