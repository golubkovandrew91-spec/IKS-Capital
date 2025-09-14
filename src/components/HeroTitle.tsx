'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import DecryptedText from './DecryptedText.jsx';
import TextType from './TextType';
import GradientText from './GradientText.jsx';

const HeroTitle: React.FC = () => {
  const investRef = useRef<HTMLSpanElement | null>(null);
  const keepRef = useRef<HTMLSpanElement | null>(null);
  const secureRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [investTrigger, setInvestTrigger] = useState(0);
  const [keepTrigger, setKeepTrigger] = useState(0);
  const [secureTrigger, setSecureTrigger] = useState(0);
  const [capitalKey, setCapitalKey] = useState(0);
  const [capitalVisible, setCapitalVisible] = useState(false);
  const capitalRef = useRef<HTMLDivElement | null>(null);

  // Финальная фаза: из букв формируем 'IKS'
  const runIKSMorph = () => {
    const root = containerRef.current;
    if (!root) return;

    const queryChars = (cls: string) => Array.from(root.querySelectorAll<HTMLElement>(`.${cls} [aria-hidden="true"] > span`));
    const investChars = queryChars('dt-invest');
    const keepChars = queryChars('dt-keep');
    const secureChars = queryChars('dt-secure');
    if (investChars.length === 0 || keepChars.length === 0 || secureChars.length === 0) return;

    const iSpan = investChars[0];
    const kSpan = keepChars[0];
    const sSpan = secureChars[0];
    const restSpans = [
      ...investChars.slice(1),
      ...keepChars.slice(1),
      ...secureChars.slice(1),
    ];

    // 1) Скрыть лишние буквы в словах
    gsap.to(restSpans, { autoAlpha: 0, duration: 0.3, ease: 'power1.out' });

    // 2) Создать абсолюные клоны первых букв и спрятать оригиналы
    const overlay = root; // родитель уже flex, нам нужна абсолютная плоскость: добавим position: relative у контейнера
    (overlay as HTMLElement).style.position = (getComputedStyle(overlay as HTMLElement).position === 'static') ? 'relative' : getComputedStyle(overlay as HTMLElement).position;

    const makeClone = (src: HTMLElement, char: string) => {
      const rect = src.getBoundingClientRect();
      const parentRect = overlay.getBoundingClientRect();
      const style = getComputedStyle(src);
      // wrapper с градиентом как у компонента GradientText
      const wrap = document.createElement('div');
      wrap.className = 'animated-gradient-text';
      wrap.style.position = 'absolute';
      wrap.style.left = `${rect.left - parentRect.left}px`;
      wrap.style.top = `${rect.top - parentRect.top}px`;
      wrap.style.zIndex = '10';
      const inner = document.createElement('div');
      inner.className = 'text-content';
      // зелёно-бирюзовая палитра как в GradientText.jsx по умолчанию
      inner.style.backgroundImage = `linear-gradient(to right, #0b4f2a, #0f6f3a, #12a05d, #17c08a, #12a05d, #0f6f3a, #0b4f2a)`;
      inner.style.animationDuration = `8s`;
      inner.textContent = char;
      // применяем типографику как у исходной буквы
      inner.style.lineHeight = style.lineHeight as string;
      inner.style.fontSize = style.fontSize as string;
      inner.style.fontWeight = style.fontWeight as string;
      inner.style.fontFamily = style.fontFamily as string;
      inner.style.letterSpacing = style.letterSpacing as string;
      wrap.appendChild(inner);
      overlay.appendChild(wrap);
      // скрыть исходный символ
      gsap.set(src, { autoAlpha: 0 });
      return wrap;
    };

    const iClone = makeClone(iSpan, iSpan.textContent || 'I');
    const kClone = makeClone(kSpan, kSpan.textContent || 'K');
    const sClone = makeClone(sSpan, sSpan.textContent || 'S');

    // 3) Рассчитать конечные координаты для горизонтального IKS
    const iRect = iSpan.getBoundingClientRect();
    const kRect = kSpan.getBoundingClientRect();
    const sRect = sSpan.getBoundingClientRect();
    const parentRect = overlay.getBoundingClientRect();
    const baseY = iRect.top - parentRect.top; // локальные координаты
    const gap = Math.max(12, Math.round(iRect.width * 0.25));
    const kTargetLeft = (iRect.left - parentRect.left) + iRect.width + gap;
    const sTargetLeft = kTargetLeft + kRect.width + gap;

    // 4) Три фазы траектории
    // Фаза A: вправо — медленно (равномерные зазоры, S дальше K, примерно к позиции последней буквы 'e' из Secure)
    const tl = gsap.timeline({ paused: true });
    const kStartLeft = parseFloat(kClone.style.left);
    const sStartLeft = parseFloat(sClone.style.left);
    const lastSecure = secureChars[secureChars.length - 1];
    const lastRect = lastSecure.getBoundingClientRect();
    const lastTargetLeft = lastRect.left - parentRect.left;
    const iLeft = iRect.left - parentRect.left;
    const iRight = iLeft + iRect.width;
    // Вычисляем зазор так, чтобы I—K и K—S были равны, а S приблизилась к целевой точке lastTargetLeft
    let gapA = (lastTargetLeft - iRight - kRect.width) / 2;
    const minGapA = Math.max(12, gap * 0.6);
    const maxGapA = Math.max(minGapA + 8, gap * 1.2);
    gapA = Math.min(maxGapA, Math.max(minGapA, gapA));
    const kPhaseRight = iRight + gapA;
    const sPhaseRight = kPhaseRight + kRect.width + gapA;
    tl.to(kClone, { left: kPhaseRight, duration: 0.6, ease: 'power1.inOut' }, 0);
    tl.to(sClone, { left: sPhaseRight, duration: 0.6, ease: 'power1.inOut' }, 0);

    // Фаза B: вверх — быстро (выравниваем по Y с I)
    tl.to([kClone, sClone], { top: baseY, duration: 0.3, ease: 'power4.out' }, 0.6);

    // Фаза C: центровка — медленно (точные финальные позиции с равными зазорами)
    const iWidth = iRect.width;
    const kWidth = kRect.width;
    const sWidth = sRect.width;
    const groupWidth = iWidth + gap + kWidth + gap + sWidth;
    const containerWidth = parentRect.width;
    const groupLeftTarget = (containerWidth - groupWidth) / 2;
    const iFinalLeft = groupLeftTarget;
    const kFinalLeft = iFinalLeft + iWidth + gap;
    const sFinalLeft = kFinalLeft + kWidth + gap;
    tl.to(iClone, { left: iFinalLeft, top: baseY, duration: 0.6, ease: 'power1.inOut' }, 0.9);
    tl.to(kClone, { left: kFinalLeft, top: baseY, duration: 0.6, ease: 'power1.inOut' }, 0.9);
    tl.to(sClone, { left: sFinalLeft, top: baseY, duration: 0.6, ease: 'power1.inOut' }, 0.9);
    // Появление слова "Capital" (через TextType): масштаб/прозрачность с Phase A старта, печать с начала Phase C
    const groupCenterLeft = groupLeftTarget + groupWidth / 2;
    const belowOffset = (iRect.bottom - iRect.top) * 0.9;
    if (capitalRef.current) {
      // установить абсолютные координаты и начальные состояния
      gsap.set(capitalRef.current, {
        position: 'absolute',
        left: groupCenterLeft,
        top: baseY + belowOffset,
        xPercent: -50,
        opacity: 0,
        transformOrigin: '50% 50%'
      });
      // показать и смонтировать Capital только в начале Phase C (когда начинается центровка IKS)
      tl.call(() => setCapitalVisible(true), undefined, 0.9);
      tl.set(capitalRef.current, { opacity: 1 }, 0.9);
    }

    // Запуск на следующий тик, чтобы убедиться что DOM обновился
    setTimeout(() => tl.play(0), 0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'linear' } });

      tl.set([investRef.current, keepRef.current, secureRef.current], { autoAlpha: 0, y: 0 });

      // 1. Invest — запустить DecryptedText (manual) и анимировать fade-in
      tl.call(() => setInvestTrigger((v) => v + 1));
      tl.fromTo(
        investRef.current,
        { autoAlpha: 0, y: -20 },
        { autoAlpha: 1, y: 0 }
      );
      // задержка 0.3с
      tl.to({}, { duration: 0.3 });

      // 2. Keep — запустить DecryptedText (manual) и анимировать fade-in
      tl.call(() => setKeepTrigger((v) => v + 1));
      tl.fromTo(
        keepRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1 }
      );
      // задержка 0.3с
      tl.to({}, { duration: 0.3 });

      // 3. Secure — запустить DecryptedText (manual) и анимировать fade-in
      tl.call(() => setSecureTrigger((v) => v + 1));
      tl.fromTo(
        secureRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 }
      );
      // Пауза 0.5с и запуск морфинга
      tl.to({}, { duration: 0.5 });
      tl.call(() => runIKSMorph());
    }, containerRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center leading-tight">
      <h1 aria-label="Invest Keep Secure" className="flex flex-col items-center justify-center font-semibold tracking-tight gap-1 sm:gap-2 md:gap-3">
        <span ref={investRef} className="block text-7xl sm:text-8xl md:text-9xl leading-none">
          <GradientText>
            <DecryptedText
              text="Invest"
              speed={90}
              maxIterations={20}
              animateOn="manual"
              triggerId={investTrigger}
              parentClassName="dt-invest inline-block"
            />
          </GradientText>
        </span>
        <span ref={keepRef} className="block text-7xl sm:text-8xl md:text-9xl leading-none">
          <GradientText>
            <DecryptedText
              text="Keep"
              speed={90}
              maxIterations={50}
              animateOn="manual"
              triggerId={keepTrigger}
              parentClassName="dt-keep inline-block"
            />
          </GradientText>
        </span>
        <span ref={secureRef} className="block text-7xl sm:text-8xl md:text-9xl leading-none">
          <GradientText>
            <DecryptedText
              text="Secure"
              speed={90}
              maxIterations={20}
              animateOn="manual"
              triggerId={secureTrigger}
              parentClassName="dt-secure inline-block"
            />
          </GradientText>
        </span>
      </h1>
      {/* Контейнер для Capital: такой же размер шрифта, будет позиционирован и анимирован GSAP */}
      <div ref={capitalRef} className="pointer-events-none select-none opacity-0">
        {capitalVisible && (
          <GradientText>
            <TextType
              key={capitalKey}
              text="Capital"
              typingSpeed={85}
              loop={false}
              showCursor={false}
              gradientMode={true}
              className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tight"
            />
          </GradientText>
        )}
      </div>
    </div>
  );
};

export default HeroTitle;
