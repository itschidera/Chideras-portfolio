varying float vNoise;
varying vec2 vUv; 
uniform sampler2D uImage;
uniform float time;
uniform float hoverState;
void main(){
    // vec3 color1 = vec3(1.,0.,0.);
    // vec3 color2 = vec3(0.,0.,1.);
    // vec3 finalColor = mix(color1, color2, 0.5*(vNoise +1.)); 
   vec2 newUV = vUv;

    vec2 p = newUV;
    float x = hoverState;
    x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));
    vec4 f = mix(
        texture2D(uImage, (p-.5)*(1.-x)+.5), 
        texture2D(uImage, (p-.5)*x+.5), 
        x);


    vec4 oceanView = texture2D(uImage,newUV);

        // gl_FragColor = vec4(finalColor,1.);
        // gl_FragColor = vec4(vUv,0.,1.); 
        // gl_FragColor = vec4(vNoise); 
        // gl_FragColor = vec4(vNoise, 0., 0., 1.); 
        // gl_FragColor = oceanView;
        gl_FragColor = f;
        gl_FragColor.rgb += 0.05*vec3(vNoise);
 
      }