import { useCallback, useContext, useEffect, useState} from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';
import './Particles.scss'
import { Context } from '../../assets/Consts';


export default function ParticlesBackground() {

    let {theme} = useContext(Context);;
    const [color, setColor] = useState<string>(theme === "dark" ? "#ffffff" : "#000000");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
      }, []);

    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          // loaded={particlesLoaded}
          options={{
            // background: {
            //     color: {
            //         value: "#0d47a1",
            //     },
            // },
            zIndex: -99,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 500,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: color,
              },
              links: {
                color: color,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            polygon: { 
                enable: true,
                url: "/vite.svg",
            },
            detectRetina: true,
          }}
        />
    )
}

