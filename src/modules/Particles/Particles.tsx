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
    

    // const particlesInit = useCallback(async (engine: Engine) => {
    //     await loadSlim(engine);
    //   }, []);

    const options = {
      name: "Polygon Mask",
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
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          outModes: "bounce",
          speed: 1
        },
        number: {
          limit: 0,
          value: 200
        },
        opacity: {
          animation: {
            enable: true,
            speed: 2,
            sync: false
          },
          value: {
            min: 0.05,
            max: 0.4
          }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 1
        }
      },
      polygon: {
        draw: {
          enable: true,
          lineColor: `${color}60`,
          lineWidth: 1
        },
        enable: true,
        move: {
          radius: 10
        },
        inline: {
          arrangement: "equidistant"
        },
        scale: 1,
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
          // init={particlesInit}
          // loaded={particlesLoaded}
          options={options}
          // options={{
          //   // background: {
          //   //     color: {
          //   //         value: "#0d47a1",
          //   //     },
          //   // },
          //   zIndex: -99,
          //   fpsLimit: 120,
          //   interactivity: {
          //     events: {
          //       onClick: {
          //         enable: true,
          //         mode: "push",
          //       },
          //       onHover: {
          //         enable: true,
          //         mode: "repulse",
          //       },
          //       resize: true,
          //     },
          //     modes: {
          //       push: {
          //         quantity: 4,
          //       },
          //       repulse: {
          //         distance: 200,
          //         duration: 0.4,
          //       },
          //     },
          //   },
          //   particles: {
          //     color: {
          //       value: color,
          //     },
          //     links: {
          //       color: color,
          //       distance: 150,
          //       enable: true,
          //       opacity: 0.5,
          //       width: 1,
          //     },
          //     move: {
          //       direction: "none",
          //       enable: true,
          //       outModes: {
          //         default: "bounce",
          //       },
          //       random: false,
          //       speed: 2,
          //       straight: false,
          //     },
          //     number: {
          //       density: {
          //         enable: true,
          //         area: 800,
          //       },
          //       value: 80,
          //     },
          //     opacity: {
          //       value: 0.5,
          //     },
          //     shape: {
          //       type: "circle",
          //     },
          //     size: {
          //       value: { min: 1, max: 5 },
          //     },
          //   },
          //   polygon: { 
          //       enable: true,
          //       url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
          //   },
          //   detectRetina: true,
          // }}
        />
    )
}

