// document.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById("ff").innerHTML = "ddd";
    setTimeout(() => {
        document.getElementById("ff").innerHTML = "EE";
particlesJS("particles-js",
    {
        "particles":{
            "number":{
                "value":50,
                "density":{
                    "enable":true,
                    "value_area":3000
                }
            },
            "color":{
                "value":"#1b1e34"
            },
            "shape":{
                "type":"polygon",
                "stroke":{
                    "width":0,
                    "color":"#000"
                },
                "polygon":{
                    "nb_sides":6
                },
                "image":{
                    "src":"img/github.svg",
                    "width":100,
                    "height":100
                }
            },
            "opacity":{
                "value":0.09620472365193136,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":1,
                    "opacity_min":0.1,
                    "sync":false
                }
            },
            "size":{
                "value":72.15354273894853,
                "random":true,
                "anim":{
                    "enable":true,
                    "speed":10,
                    "size_min":40,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
                "distance":200,
                "color":"#ffffff",
                "opacity":1,
                "width":2
            },
            "move":{
                "enable":true,
                "speed":8,
                "direction":"none",
                "random":false,
                "straight":false,
                "out_mode":"out",
                "bounce":false,
                "attract":{
                    "enable":false,
                    "rotateX":600,
                    "rotateY":1200
                }
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{
                    "enable":false,
                    "mode":"grab"
                },"onclick":{
                    "enable":false,
                    "mode":"push"
                },
                "resize":true
            },
            "modes":{
                "grab":{
                    "distance":400,
                    "line_linked":{
                        "opacity":1
                    }
                },
                "bubble":{
                    "distance":400,
                    "size":40,
                    "duration":2,
                    "opacity":8,
                    "speed":3
                },
                "repulse":{
                    "distance":200,
                    "duration":0.4},
                    "push":{
                        "particles_nb":4
                    },
                    "remove":{
                        "particles_nb":2
                    }
                }
            },
            "retina_detect":true
        }
    );
    console.log("E")

}, 4000);
// });
        
        // var count_particles, stats, update; stats = new Stats; stats.setMode(0);
        // stats.domElement.style.position = 'absolute';
        // stats.domElement.style.left = '0px';
        // stats.domElement.style.top = '0px';
        // document.body.appendChild(stats.domElement);
        // count_particles = document.querySelector('.js-count-particles');
        // update = function() { stats.begin(); stats.end();
        //     if(window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array){
        //         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        //     }
        //     requestAnimationFrame(update);
        // };
        // requestAnimationFrame(update);;
        