import * as THREE from 'three'; // Three js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; // orbit controls
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'; // gui
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';  // Create scene
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // for model

// ye samjne ke liye code hai.. (without ai and own lang.me)
function owncode() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const canvas = document.querySelector('#draw');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  // responsive frame
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight); // renderer = printer
    camera.aspect = window.innerWidth / window.innerHeight; // camera = eye
    camera.updateProjectionMatrix(); // update the camera
  });


  function animate() {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
  // renderer.setAnimationLoop(animate);
  animate();
}
// owncode();


// with ai
function withai() {
  // Create scene
  const scene = new THREE.Scene();



  // Setup camera
  const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
  );
  camera.position.z = 5;

  // Create renderer
  const canvas = document.querySelector('#draw');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88, wireframe: true }); // material ko wireframe kiya hai
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);



  // controls  // copied from docs
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true; // smooth movement k liye
  // controls.autoRotate = true; // a1uto rotate k liye
  // controls.autoRotateSpeed = .110; // auto rotate speed k liye
  // controls.enableZoom = true; // zoom k liye
  // controls.dampingFactor = 1.06; // damping factor k liye


  //controls.update() must be called after any manual changes to the camera's transform
  // camera.position.set(0, 20, 100);
  controls.update(); // copied from docs

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate cube
    cube.rotation.x += .01;
    cube.rotation.y += .01;

    renderer.render(scene, camera);
  }
  animate();

  // Handle window resizing
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

}
// withai();



// geometry
function geometry() {
  // Create scene
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Setup renderer
  const canvas = document.querySelector('#draw');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create sphere 

  // const geometry = new THREE.SphereGeometry(1, 10, 6, 2, 1.2); // (radius, widthSegments, heightSegments)
  // const material = new THREE.MeshBasicMaterial({ color: "yellow", wireframe: true });
  // const cube = new THREE.Mesh(geometry, material);

  // create cylinder

  const geometry = new THREE.CylinderGeometry(2, 2, 2, 10, 10, true);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false, side: THREE.DoubleSide }); // to see double site .. front and back
  const cylinder = new THREE.Mesh(geometry, material); scene.add(cylinder);


  scene.add(cylinder);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.update();


  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // cylinder.rotation.x += 0.01;  // comment this to stop rotation
    // cylinder.rotation.y += 0.01;  // comment this to stop rotation

    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}
// geometry();



// material
function material() {
  // Create scene
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Setup renderer
  const canvas = document.querySelector('#draw');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create sphere 

  // const geometry = new THREE.SphereGeometry(1, 10, 6, 2, 1.2); // (radius, widthSegments, heightSegments)
  // const material = new THREE.MeshBasicMaterial({ color: "yellow", wireframe: true });
  // const cube = new THREE.Mesh(geometry, material);



  // Add intense directional light
  const brightLight = new THREE.DirectionalLight("yellow", 3); // High intensity of 3
  brightLight.position.set(5, 8, 2);
  scene.add(brightLight);

  // Add ambient light for overall scene illumination
  const ambientLight = new THREE.AmbientLight("red", 2); // black color k liye
  // scene.add(ambientLight);

  // Add directional light for main illumination
  const mainLight = new THREE.DirectionalLight("orange", 1); // orange color k liye
  mainLight.position.set(10, 10, 10);
  scene.add(mainLight);

  // Add fill light from opposite side
  const fillLight = new THREE.DirectionalLight("blue", 2); // blue color k liye
  fillLight.position.set(-10, 0, -10);
  scene.add(fillLight);

  // Add rim light for edge highlighting
  const rimLight = new THREE.DirectionalLight("aqua", 2); // aqua color k liye
  rimLight.position.set(0, -10, 0);
  scene.add(rimLight);

  // Add light helpers for visualization
  const brightLightHelper = new THREE.DirectionalLightHelper(brightLight, 2); // 2 is size of helper
  scene.add(brightLightHelper);

  const mainLightHelper = new THREE.DirectionalLightHelper(mainLight, 6); // 6 is size of helper
  scene.add(mainLightHelper);

  const fillLightHelper = new THREE.DirectionalLightHelper(fillLight, 3); // 3 is size of helper
  scene.add(fillLightHelper);

  const rimLightHelper = new THREE.DirectionalLightHelper(rimLight, 8); // 8 is size of helper
  scene.add(rimLightHelper);



  // create mesh

  const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, true);
  const material = new THREE.MeshStandardMaterial({ color: "yellow", roughness: 3, metalness: 1, wireframe: false });
  const cylinder = new THREE.Mesh(geometry, material); scene.add(cylinder);


  scene.add(cylinder);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.update();


  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // cylinder.rotation.x += 0.01;  // comment this to stop rotation
    // cylinder.rotation.y += 0.01;  // comment this to stop rotation

    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}
// material();


// Texture function
function texture() {
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Setup renderer
  const canvas = document.querySelector('#draw');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add lighting

  addLights(scene);


  // Function to add lights to the scene
  function addLights(scene) {
    // Add intense directional light
    const brightLight = new THREE.DirectionalLight(0xffffff, 3);
    brightLight.position.set(5, 8, 2);
    scene.add(brightLight);

    // Add main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(10, 10, 10);
    scene.add(mainLight);

    // Add fill light from opposite side
    const fillLight = new THREE.DirectionalLight(0xffffff, 2);
    fillLight.position.set(-10, 0, -10);
    scene.add(fillLight);

    // Add rim light for edge highlighting
    const rimLight = new THREE.DirectionalLight(0xffffff, 2);
    rimLight.position.set(0, -10, 0);
    scene.add(rimLight);
  }

  // Function to create materials with textures
  function createMaterial() {
    const loader = new THREE.TextureLoader();
    const color = loader.load('./textures/color.jpg');
    const roughness = loader.load('./textures/paper_0025_roughness_1k.jpg');
    const normal = loader.load('./textures/paper_0025_normal_opengl_1k.jpg');

    const material = new THREE.MeshStandardMaterial({
      map: color,
      roughnessMap: roughness,
      normalMap: normal,
      roughness: 0.5, // Added default roughness
      metalness: 0.5, // Added default metalness
      normalScale: new THREE.Vector2(1, 1) // Added normalScale
    });

    return material;
  }

  // Handle window resizing
  function onResize(renderer, camera) {
    return () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
  }

  // Setup GUI controls
  function setupGUI(material, mesh) {
    const gui = new GUI();

    // Material controls folder
    const materialFolder = gui.addFolder('Material');
    materialFolder.add(material, 'roughness', 0, 1, 0.01).name('Roughness');
    materialFolder.add(material, 'metalness', 0, 1, 0.01).name('Metalness');
    materialFolder.addColor(material, 'emissive').name('Emissive');
    materialFolder.add(material.normalScale, 'x', 0, 2, 0.01).name('Normal Scale X');
    materialFolder.add(material.normalScale, 'y', 0, 2, 0.01).name('Normal Scale Y');

    // Mesh controls folder  
    const meshFolder = gui.addFolder('Mesh');
    meshFolder.add(mesh.rotation, 'x', 0, Math.PI * 2).name('Rotate X');
    meshFolder.add(mesh.rotation, 'y', 0, Math.PI * 2).name('Rotate Y');
    meshFolder.add(mesh.rotation, 'z', 0, Math.PI * 2).name('Rotate Z');
    meshFolder.add(mesh.scale, 'x', 0.1, 2).name('Scale X');
    meshFolder.add(mesh.scale, 'y', 0.1, 2).name('Scale Y');
    meshFolder.add(mesh.scale, 'z', 0.1, 2).name('Scale Z');

    // Open folders by default
    materialFolder.open();
    meshFolder.open();
  }


  // Add mesh with texture
  const material = createMaterial();
  const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, true);
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Add camera controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.update();

  // Handle window resize
  window.addEventListener('resize', onResize(renderer, camera));

  // GUI controls
  const gui = new GUI();
  setupGUI(material, cube); // Fixed: Pass material and cube instead of gui

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Added controls update in animation loop
    renderer.render(scene, camera);
  }

  animate();
}
// texture();



// adding model 
//  go to Sktchfab to get model link and add it here

// AAB BANEGA STARTING STARTING SE.. HEHEHEHE 
function scratch() {
  // Create scene
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(1, 1, 1);

  // Create renderer
  const canvas = document.querySelector('#draw');
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Add HDRI environment lighting
  const rgbeLoader = new RGBELoader();
  rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr', (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
  });

  // Load 3D model
  const loader = new GLTFLoader();
  let model;
  loader.load('./textures/cream_box.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);
    
    // Add GUI controls for the model once loaded
    const modelFolder = gui.addFolder('Model Controls');
    modelFolder.add(model.rotation, 'x', -Math.PI, Math.PI, 0.01).name('Rotate X');
    modelFolder.add(model.rotation, 'y', -Math.PI, Math.PI, 0.01).name('Rotate Y');
    modelFolder.add(model.rotation, 'z', -Math.PI, Math.PI, 0.01).name('Rotate Z');
    modelFolder.add(model.position, 'y', -5, 5, 0.1).name('Height');
    modelFolder.add(model.scale, 'x', 0.1, 2, 0.1).name('Scale')
      .onChange((value) => {
        model.scale.set(value, value, value);
      });
    modelFolder.open();
  });

  // Add orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.update();

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Add GUI panel
  const gui = new GUI();
  
  // Add environment controls
  const envFolder = gui.addFolder('Environment');
  envFolder.add(renderer, 'toneMappingExposure', 0, 2, 0.01).name('Exposure');
  envFolder.open();

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

scratch();