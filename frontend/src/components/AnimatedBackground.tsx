import React, { useRef, useEffect } from 'react';

const fordBlue = '#00a1e0';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Responsive resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Animation state
    const lines = Array.from({ length: 8 }, (_, i) => ({
      y: (height / 8) * i + 40,
      speed: 0.2 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2,
    }));
    const dots = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.5 + Math.random() * 2.5,
      speed: 0.2 + Math.random() * 0.4,
      alpha: 0.2 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let running = true;
    function animate() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw animated lines
      lines.forEach((line, i) => {
        if (!ctx) return;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        for (let x = 0; x <= width; x += 10) {
          const y =
            line.y +
            Math.sin((x / 120) + (frame * line.speed * 0.03) + line.phase) * 18 +
            Math.cos((x / 200) + (frame * line.speed * 0.01) + line.phase) * 8;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(0, 161, 224, 0.13)`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = fordBlue;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      });

      // Draw glowing dots
      dots.forEach(dot => {
        if (!ctx) return;
        ctx.save();
        const t = frame * dot.speed * 0.008 + dot.phase;
        const x = dot.x + Math.sin(t) * 30;
        const y = dot.y + Math.cos(t) * 30;
        ctx.beginPath();
        ctx.arc(x, y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 161, 224, ${dot.alpha})`;
        ctx.shadowColor = fordBlue;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });

      frame++;
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
        background: 'transparent',
      }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground; 