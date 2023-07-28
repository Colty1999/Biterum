import { useCallback, useContext, useEffect, useState} from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Engine, ISourceOptions, tsParticles } from 'tsparticles-engine';
import './Particles.scss'
import { Context } from '../../assets/Consts';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';
import { loadFull } from 'tsparticles';


export default function ParticlesBackground() {

    let {theme} = useContext(Context);;
    const [color, setColor] = useState<string>(theme === "dark" ? "#ffffff" : "#000000");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    const options = {
      name: "Etherum Mask",
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push"
          },
          onDiv: {
            elementId: "repulse-div",
            enable: false,
            mode: "repulse"
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            }
          }
        },
        modes: {
          bubble: {
            distance: 40,
            duration: 2,
            opacity: 8,
            size: 6
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5
            },
            radius: 60
          },
          grab: {
            distance: 400,
            links: {
              opacity: 1
            }
          },
          push: {
            quantity: 4
          },
          remove: {
            quantity: 2
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          slow: {
            active: false,
            radius: 0,
            factor: 1
          }
        }
      },
      particles: {
        color: {
          value: color
        },
        links: {
          blink: false,
          color: `${color}60`,
          consent: false,
          distance: 30,
          enable: true,
          opacity: 0.8,
          width: 2
        },
        move: {
          enable: true,
          outModes: "bounce",
          speed: 1
        },
        number: {
          limit: 0,
          value: 100
        },
        opacity: {
          animation: {
            enable: true,
            speed: 2,
            sync: false
          },
          value: {
            min: 0.1,
            max: 0.5
          }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 2
        }
      },
      polygon: {
        draw: {
          enable: true,
          lineColor: `${color}60`,
          lineWidth: 2
        },
        enable: true,
        move: {
          radius: 100
        },
        position: {
          x: 125,
          y: 180
        },
        inline: {
          arrangement: "equidistant"
        },
        scale: 3,
        type: "inline",
        url: "/path.svg"
      },
    } as ISourceOptions;

    return (
        <Particles
          id="tsparticles"
          init={async (engine) => {
            await loadFull(engine);
            await loadPolygonMaskPlugin(engine);
          }}
          options={options}
        />
    )
}

