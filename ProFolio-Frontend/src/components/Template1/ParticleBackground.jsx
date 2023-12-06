import Particles from "react-tsparticles";
import particlesConfig from "./particle-config";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticleBackground() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
            <Particles id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded} options={{fullScreen: false,particles: particlesConfig.particles, interactivity: particlesConfig.interactivity }}> </Particles>
    );
}