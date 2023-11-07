import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

import CanvasLoader from "../Loader";

const Earth = () => {
	const [model, setModel] = useState(null);

	useEffect(() => {
		const loader = new GLTFLoader();
		loader.load("./planet/scene.glb", (gltf) => {
			setModel(gltf.scene);
		});
	}, []);

	if (!model) {
		return null; // Return null or a loading indicator if the model is not loaded yet
	}

	return <primitive object={model} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default EarthCanvas;
