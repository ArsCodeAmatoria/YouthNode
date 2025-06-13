'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeJSBackgroundProps {
  className?: string;
}

export default function ThreeJSBackground({ className = '' }: ThreeJSBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = 'threejs-canvas';
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create flowing lines geometry
    const numLines = 100;
    const pointsPerLine = 200;
    const lines: THREE.Line[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.LineBasicMaterial[] = [];

    for (let lineIndex = 0; lineIndex < numLines; lineIndex++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsPerLine * 3);
      const colors = new Float32Array(pointsPerLine * 3);

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
        linewidth: 2
      });

      const line = new THREE.Line(geometry, material);
      lines.push(line);
      geometries.push(geometry);
      materials.push(material);
      scene.add(line);
    }

    // Camera position
    camera.position.z = 50;

    // Animation variables
    let t = 0;

    // Mathematical function from the provided formula
    const calculatePoint = (x: number, y: number, t: number) => {
      const k = 9 * Math.cos(x / 8);
      const e = y / 8 - 12.5;
      const d = Math.sqrt(k * k + e * e);
      const mag = d * d / 99 + Math.sin(t) / 6 + 0.5;
      
      const q = 99 - e * Math.sin(Math.atan2(k, e) * 7) / (d || 0.001) + k * (3 + Math.cos(d * d - t) * 2);
      const c = d / 2 + e / 69 - t / 16;
      
      const pointX = q * Math.sin(c) * 0.1;
      const pointY = (q + 19 * d) * Math.cos(c) * 0.1;
      const pointZ = Math.sin(d + t * 2) * 5;
      
      return {
        x: pointX,
        y: pointY,
        z: pointZ,
        intensity: mag
      };
    };

    // Animation loop
    const animate = () => {
      t += Math.PI / 45;

      lines.forEach((line, lineIndex) => {
        const geometry = line.geometry;
        const positions = geometry.attributes.position.array as Float32Array;
        const colors = geometry.attributes.color.array as Float32Array;

        // Create flowing lines based on the mathematical formula
        for (let i = 0; i < pointsPerLine; i++) {
          const x = (lineIndex * 2) + (i * 0.5) - 50;
          const y = (i * 0.3) - 30;
          
          const point = calculatePoint(x, y, t + lineIndex * 0.1);
          
          // Set position
          positions[i * 3] = point.x;
          positions[i * 3 + 1] = point.y;
          positions[i * 3 + 2] = point.z;
          
          // Set color based on intensity and Canadian theme
          const intensity = Math.abs(point.intensity);
          const phase = (lineIndex / numLines) * Math.PI * 2;
          
          if (intensity > 0.7) {
            // Maple red flowing
            colors[i * 3] = 0.8 + Math.sin(t + phase) * 0.2; // R
            colors[i * 3 + 1] = 0.1; // G
            colors[i * 3 + 2] = 0.1; // B
          } else if (intensity > 0.4) {
            // Icy blue flowing
            colors[i * 3] = 0.2; // R
            colors[i * 3 + 1] = 0.6 + Math.cos(t + phase) * 0.3; // G
            colors[i * 3 + 2] = 0.9 + Math.sin(t + phase) * 0.1; // B
          } else {
            // White/aurora flowing
            const aurora = 0.7 + Math.sin(t * 2 + phase) * 0.3;
            colors[i * 3] = aurora; // R
            colors[i * 3 + 1] = aurora + 0.1; // G
            colors[i * 3 + 2] = aurora + 0.2; // B
          }
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
      });

      // Gentle camera movement
      camera.position.x = Math.sin(t * 0.1) * 2;
      camera.position.y = Math.cos(t * 0.15) * 1;

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      
      // Clean up geometries and materials
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 ${className}`}
      style={{ 
        pointerEvents: 'none',
        opacity: 0.8,
        zIndex: 1
      }} 
    />
  );
} 