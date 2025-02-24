#pragma header

uniform float uStrength;
uniform float uReach;

void main(){
vec2 uv = openfl_TextureCoordv;

uv *= 1.0 - uv.yx;// uv *= vec2(1.0, 1.0) - uv.yx;

float vignette = uv.x*uv.y * uStrength;
vignette = pow(vignette, uReach);

vec4 color = texture2D(bitmap, openfl_TextureCoordv);
color.rgb *= vignette;

gl_FragColor = color;
}