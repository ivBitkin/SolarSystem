window.onload = function() {
    var scene, camera, render, container, light;
    var width, height;
    

    container = document.createElement('div');
    document.body.appendChild(container);
    
     width = window.innerWidth;
     height = window.innerHeight;
    
   

    camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000000);
    camera.position.z = 13300;
    // camera.rotation.z = -Math.PI/40;
    scene = new THREE.Scene();
    
    //Code...

    light = new THREE.PointLight(0xffffff,1.4, 30000);
    light.position.set(0,0,5000);
    light.castShadow = true;
    light.shadowMapWidth = 2048;
    light.shadowMapHeight = 2048;
    scene.add(light);


    //stars
    var starsGeometry = new THREE.Geometry();
    var starsMaterial = new THREE.ParticleBasicMaterial({color:0xbbbbbb, opacity:0.6, size:1, sizeAttenuation:false});
    var stars;

    for(var i = 0; i<8000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(1500);
        starsGeometry.vertices.push(vertex);
    }
    stars = new THREE.ParticleSystem(starsGeometry,starsMaterial);
    stars.scale.set(30, 30, 30);
    scene.add(stars);

    var starsGeometry2 = new THREE.Geometry();
    var starsMaterial2 = new THREE.ParticleBasicMaterial({color:0xbbbbbb, opacity:1, size:1, sizeAttenuation:false});
    var stars2;

    for(var i = 0; i<10000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(6000);
        starsGeometry2.vertices.push(vertex);
    }
    stars2 = new THREE.ParticleSystem(starsGeometry2,starsMaterial2);
    stars.scale.set(40, 90, 80);
    scene.add(stars);


    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);
     //Sun
     var sun, sun_geom, sun_mat;
     sun_geom = new THREE.SphereGeometry(1530, 30, 20);
     var texture = new THREE.TextureLoader().load('sun.png');
     texture.anisotropy = 9;
     sun_mat = new THREE.MeshBasicMaterial({map: texture});
     // sun_mat = new THREE.MeshNormalMaterial();
     sun = new THREE.Mesh(sun_geom, sun_mat);
     scene.add(sun);
 

    // Mercury
    var mercury, mercury_geom, mercury_mat;
    mercury_geom = new THREE.SphereGeometry(60,20,20);
    var mercury_texture = new THREE.TextureLoader().load('mercury.png');
    mercury_texture.anisotropy = 9;
    mercury_mat = new THREE.MeshBasicMaterial({map: mercury_texture});
    mercury = new THREE.Mesh(mercury_geom,mercury_mat);
    scene.add(mercury);

    //venus
    var venus, venus_geom, venus_mat, venus_texture;
    venus_geom = new THREE.SphereGeometry(60,20,20);
    venus_texture = new THREE.TextureLoader().load('ven.png');
    venus_texture.anisotropy = 9;
    venus_mat = new THREE.MeshBasicMaterial({map: venus_texture});
    venus = new THREE.Mesh(venus_geom,venus_mat);
    scene.add(venus);


    //earth
    var earth, earth_geom, earth_mat;
    earth_geom = new THREE.SphereGeometry(400, 20, 20);
    var texture2 = new THREE.TextureLoader().load('earth.png');
    earth_mat = new THREE.MeshBasicMaterial({map: texture2});
    texture2.anisotropy = 9;
    earth = new THREE.Mesh(earth_geom, earth_mat);
    earth.position.x = 1500;
    scene.add(earth);

    //mars
    var mars, mars_geom, mars_mat, mars_texture;
    mars_geom = new THREE.SphereGeometry(480, 20, 20);
    mars_texture = new THREE.TextureLoader().load('mars.png');
    mars_mat = new THREE.MeshBasicMaterial({map: mars_texture});
    mars_texture.anisotropy = 9;
    mars = new THREE.Mesh(mars_geom, mars_mat);
    scene.add(mars);

    //jupiter
    var jupiter, jupiter_geom, jupiter_mat, jupiter_texture;
    jupiter_geom = new THREE.SphereGeometry(350, 20, 20);
    jupiter_texture = new THREE.TextureLoader().load('jupiter.png');
    jupiter_mat = new THREE.MeshBasicMaterial({map: jupiter_texture});
    jupiter_texture.anisotropy = 9;
    jupiter = new THREE.Mesh(jupiter_geom, jupiter_mat);
    jupiter.castShadow = true;
    scene.add(jupiter);

    //saturn
    var saturn, saturn_geom, saturn_mat, saturn_texture;
    saturn_geom = new THREE.SphereGeometry(230, 20, 20);
    saturn_texture = new THREE.TextureLoader().load('saturn.png');
    saturn_mat = new THREE.MeshBasicMaterial({map: saturn_texture});
    saturn_texture.anisotropy = 9;
    saturn = new THREE.Mesh(saturn_geom, saturn_mat);
    scene.add(saturn);

    //Uranus
    var uranus, uranus_geom, uranus_mat, uranus_texture;
    uranus_geom = new THREE.SphereGeometry(220, 20, 20);
    uranus_texture = new THREE.TextureLoader().load('uranus.png');
    saturn_mat = new THREE.MeshBasicMaterial({map: uranus_texture});
    uranus_texture.anisotropy = 9;
    uranus = new THREE.Mesh(uranus_geom, uranus_mat);
    scene.add(uranus);

    //Neptune
    var neptune, neptune_geom, neptune_mat, neptune_texture;
    neptune_geom = new THREE.SphereGeometry(210, 10, 20);
    neptune_texture = new THREE.TextureLoader().load('neptune.png');
    neptune_mat = new THREE.MeshBasicMaterial({map: neptune_texture});
    neptune_texture.anisotropy = 9;
    neptune = new THREE.Mesh(neptune_geom, neptune_mat);
    scene.add(neptune);





    render = new THREE.CanvasRenderer();
    render.setSize(width,height);
    container.appendChild(render.domElement);
    var t = 0;
    // var y = 0;
    

    animate();

    function animate() {
        requestAnimationFrame(animate);
        sun.rotation.y +=0.015;

        earth.rotation.y -= 0.02;
        earth.position.x = Math.sin(t*0.7)*7000;
        earth.position.z = Math.cos(t*0.7)*7000;

        mercury.position.x = Math.sin(t*1.1)*4000;
        mercury.position.z = Math.cos(t*1.1)*4000;

        venus.position.x = Math.sin(t*0.4)*5500;
        venus.position.z = Math.cos(t*0.4)*5500;

        mars.position.x = Math.sin(t*0.6)*8700;
        mars.position.z = Math.cos(t*0.6)*8700;

        jupiter.position.x = Math.sin(t*0.11)*10500;
        jupiter.position.z = Math.cos(t*0.11)*10500;

        saturn.position.x = Math.sin(t*0.11)*12000;
        saturn.position.z = Math.cos(t*0.11)*12000;

        uranus.position.x = Math.sin(t*0.12)*13000;
        uranus.position.z = Math.cos(t*0.12)*13000;

        neptune.position.x = Math.sin(t*0.13)*14000;
        neptune.position.z = Math.cos(t*0.13)*14000;

        
        camera.lookAt(earth.position); 
        // camera.lookAt(sun.position); 
        t+=Math.PI/180*2;
        render.render(scene, camera);
    }
}
