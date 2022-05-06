'use strict'

window.addEventListener('load', () => {

    
    // canvasの定義
    const canvas = document.getElementById('renderCanvas')
    // 3D engineのロード
    const engine = new BABYLON.Engine(canvas, true)
    
    const createScene = () => {
        
        // シーンを作成
        const scene = new BABYLON.Scene(engine)        
        // カメラを作成
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
        // ユーザからの入力でカメラが動くように
        camera.attachControl(canvas, true);
        // ライトを作成
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        // 箱 (豆腐) を作成
        const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);

        return scene
    }

    const scene = createScene()
    engine.runRenderLoop(function () {
        scene.render();
    });    
    window.addEventListener("resize", function () {
        engine.resize();
    });


})