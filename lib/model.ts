import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(

    // @ts-ignore
    scene,

    // @ts-ignore
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()
        loader.setDRACOLoader(draco);

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'dog'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function (child) {
                    // @ts-ignore
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}