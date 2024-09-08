import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {

    if (typeof window !== 'undefined') {

	
    const width = window.innerWidth;
    const height = window.innerHeight;

    // init
    const camera = new THREE.PerspectiveCamera(100, width / height, 0.01, 10);
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);
    canvasRef.current.appendChild(renderer.domElement);

    function animate(time) {
      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;

      renderer.render(scene, camera);
    }
	}

    // return () => {
    //   renderer.dispose();
    // };
  }, []);

  return <div ref={canvasRef} />;
}