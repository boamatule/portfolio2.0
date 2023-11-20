import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	OrbitControls,
	Float,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
	const BallRef = useRef(); // Create a ref to access the loaded object
	const [decal] = useTexture([props.imgUrl]);

	useEffect(() => {
		const geometry = BallRef.current?.children[0]?.geometry;

		if (geometry) {
			geometry.computeBoundingSphere();

			const positions = geometry.attributes.position.array;

			for (let i = 0; i < positions.length; i++) {
				if (isNaN(positions[i])) {
					console.error("NaN found in position attribute at index", i);
				}
			}
		}
	}, [BallRef.current]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75} ref={BallRef}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} fetchpriority="low" />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
