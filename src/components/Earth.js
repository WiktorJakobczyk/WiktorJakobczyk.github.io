import React, { useRef, useMemo } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import MoonMap from "../assets/textures/moon.jpg";
import {TextureLoader } from "three";


const MOON_RADIUS = 2.8;
let EARTH_LOADING_SCALE = 0.1; 
export function Earth() {
  const [colorMap, normalMap, moonMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, MoonMap]
  );

  const earthRef = useRef();
  const atmoRef = useRef();
  const moonRef = useRef();

  const coneRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    moonRef.current.position.x = MOON_RADIUS * Math.cos(elapsedTime * 0.4);
    moonRef.current.position.z = MOON_RADIUS *  Math.sin(elapsedTime * 0.4);
    moonRef.current.position.y = MOON_RADIUS *  Math.sin(elapsedTime)*0.08;
    moonRef.current.rotation.y = elapsedTime;
    earthRef.current.rotation.y = elapsedTime / 8;

    if(EARTH_LOADING_SCALE < 1.0) {
      earthRef.current.scale.x = EARTH_LOADING_SCALE;
      earthRef.current.scale.y = EARTH_LOADING_SCALE;
      earthRef.current.scale.z = EARTH_LOADING_SCALE;

      atmoRef.current.scale.x = EARTH_LOADING_SCALE + 0.3;
      atmoRef.current.scale.y = EARTH_LOADING_SCALE + 0.3;
      atmoRef.current.scale.z = EARTH_LOADING_SCALE + 0.3;

      moonRef.current.scale.x = EARTH_LOADING_SCALE;
      moonRef.current.scale.y = EARTH_LOADING_SCALE;
      moonRef.current.scale.z = EARTH_LOADING_SCALE;
  
      EARTH_LOADING_SCALE +=0.02;

    } 


  });

  function Stars() {
    let group = useRef();
    let theta = 0;
    useThree(() => {
      if (group.current) {
        const r = 5 * Math.sin(THREE.MathUtils.degToRad((theta += 0.01)));
        const s = Math.cos(THREE.MathUtils.degToRad(theta * 2));
        group.current.rotation.set(r, r, r);
        group.current.scale.set(s, s, s);
      }
    });
    const colors = ["#afc9ff ", "#a6a8ff", "#a87bff"]
    const [geo, coords] = useMemo(() => {
      const geo = new THREE.SphereBufferGeometry(Math.random() * (1 - 0.5) + 0.5, 10, 10);
     
      const coords = new Array(600)
        .fill()
        .map(i => [
          Math.random() * 900 - 400,
          Math.random() * 900 - 400,
          Math.random() * 900 - 400
        ]);
      return [geo, coords];
    }, []);
  
    return (
      <group ref={group}>
        {coords.map(([p1, p2, p3], i) => {
          const mat = new THREE.MeshBasicMaterial({
             color: new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
          });
          return <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
        }
        )}
      </group>
    );
  }

  return (
    <>   
           <Stars />
      <mesh ref={moonRef} position={[MOON_RADIUS, 0, 0]}>
        <sphereGeometry args={[0.15, 64, 64]} />
          <shaderMaterial
          vertexShader="varying vec2 vertexUV;
          varying vec3 vertexNormal;
          void main() {
            vertexUV = uv;
            vertexNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }"

          fragmentShader="uniform sampler2D globeTexture;
          varying vec2 vertexUV;
          varying vec3 vertexNormal;
          void main(){
            float intensity = 1.05 - dot(vertexNormal, vec3(0.0,0.0,1.0));
            vec3 atmosphere = vec3(0.9, 0.9, 0.9) * pow(intensity, 1.5);

              gl_FragColor =  vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);;
          }"
          uniforms= {{
            globeTexture: { value: moonMap }
          }}
        />
      </mesh>
      {/* <group ref={earthRef}> */}
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 128, 128]} />
          <shaderMaterial
          vertexShader="varying vec2 vertexUV;
          varying vec3 vertexNormal;
          void main() {
            vertexUV = uv;
            vertexNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }"

          fragmentShader="uniform sampler2D globeTexture;
          varying vec2 vertexUV;
          varying vec3 vertexNormal;
          void main(){
            float intensity = 1.05 - dot(vertexNormal, vec3(0.0,0.0,1.0));
            vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

              gl_FragColor =  vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);;
          }"
          opacity={0.5}

  
          uniforms= {{
            globeTexture: { value: colorMap }
          }}
          normalMap={normalMap}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.3}
        />
        
      </mesh>

      {/* <mesh ref = {coneRef} 
      rotation={[0, 0, Math.PI*0.7]}
      position={[2.1 * Math.cos(0.8), 2.1 * Math.sin(0.85), 2.1 * Math.sin(-0.1)]}
      onPointerMove={() => coneRef.current.material.color="#FFFFFF"} onClick={()=>console.log(coneRef.current)}>
        <coneGeometry args={[0.1, 0.3, 8]} />
        <meshBasicMaterial color={"#909000"}/>
      </mesh>
      </group> */}

      <mesh ref={atmoRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 128, 128]} />
        <shaderMaterial
          vertexShader="varying vec3 vertexNormal;
          void main() {
              vertexNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }"
          fragmentShader="varying vec3 vertexNormal;
          void main() {
              float intensity = pow(0.6 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
              gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
          }"
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />

      </mesh>



    </>
  );
}