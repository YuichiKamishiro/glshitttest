#version 330 core
uniform float u_time;

void main()
{
    gl_FragColor = vec4(abs(sin(u_time)), 0, 0, 1);
} 
