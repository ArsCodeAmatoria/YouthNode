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

    // Create geometry for points
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(10000 * 3); // 10000 points, 3 coordinates each
    const colors = new Float32Array(10000 * 3); // RGB for each point

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create material
    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    // Create points mesh
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Camera position
    camera.position.z = 100;

    // Animation variables
    let t = 0;

    // Mathematical function from the provided formula
    const calculatePoint = (x: number, y: number, t: number) => {
      const k = 9 * Math.cos(x / 8);
      const e = y / 8 - 12.5;
      const d = Math.sqrt(k * k + e * e);
      const mag = d * d / 99 + Math.sin(t) / 6 + 0.5;
      
      const q = 99 - e * Math.sin(Math.atan2(k, e) * 7) / d + k * (3 + Math.cos(d * d - t) * 2);
      const c = d / 2 + e / 69 - t / 16;
      
      const pointX = q * Math.sin(c);
      const pointY = (q + 19 * d) * Math.cos(c);
      
      return {
        x: pointX * 0.3, // Scale down for Three.js scene
        y: pointY * 0.3,
        z: Math.sin(d + t) * 10, // Add Z component for 3D effect
        intensity: mag
      };
    };

    // Animation loop
    const animate = () => {
      t += Math.PI / 45;

      const positions = geometry.attributes.position.array as Float32Array;
      const colors = geometry.attributes.color.array as Float32Array;

      for (let i = 0; i < 10000; i++) {
        const x = i % 200;
        const y = Math.floor(i / 55);
        
        const point = calculatePoint(x, y, t);
        
        // Set position
        positions[i * 3] = point.x;
        positions[i * 3 + 1] = point.y;
        positions[i * 3 + 2] = point.z;
        
        // Set color based on intensity and Canadian theme
        const intensity = Math.abs(point.intensity);
        
        // Canadian colors: red, white, blue
        if (intensity > 0.7) {
          // Maple red
          colors[i * 3] = 0.8 + intensity * 0.2; // R
          colors[i * 3 + 1] = 0.1 + intensity * 0.3; // G
          colors[i * 3 + 2] = 0.1 + intensity * 0.3; // B
        } else if (intensity > 0.4) {
          // Icy blue
          colors[i * 3] = 0.3 + intensity * 0.4; // R
          colors[i * 3 + 1] = 0.6 + intensity * 0.4; // G
          colors[i * 3 + 2] = 0.9; // B
        } else {
          // White/light
          const white = 0.8 + intensity * 0.2;
          colors[i * 3] = white; // R
          colors[i * 3 + 1] = white; // G
          colors[i * 3 + 2] = white; // B
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;

      // Slowly rotate the entire scene
      points.rotation.y += 0.002;
      points.rotation.x += 0.001;

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
      
      if (renderer) {
        renderer.dispose();
      }
      
      if (geometry) {
        geometry.dispose();
      }
      
      if (material) {
        material.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ 
        pointerEvents: 'none',
        opacity: 0.6
      }} 
    />
  );
} 