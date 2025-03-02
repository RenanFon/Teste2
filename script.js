document.addEventListener('DOMContentLoaded', () => {
    // Configuração das partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ff6b8b' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff6b8b',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });

    // Elementos principais
    const verification = document.getElementById('verification');
    const nameChange = document.getElementById('nameChange');
    const mainQuestion = document.getElementById('mainQuestion');
    const wrongPerson = document.getElementById('wrongPerson');
    const preparationQuestion = document.getElementById('preparationQuestion');
    const lastWarning = document.getElementById('lastWarning');
    const notProgrammed = document.getElementById('notProgrammed');

    // Elementos de verificação de data
    const birthdayCheck = document.getElementById('birthdayCheck');
    const wrongDani = document.getElementById('wrongDani');
    const birthYesBtn = document.getElementById('birthYesBtn');
    const birthNoBtn = document.getElementById('birthNoBtn');

    // Botões
    const verifyYesBtn = document.getElementById('verifyYesBtn');
    const verifyNoBtn = document.getElementById('verifyNoBtn');
    const notProgrammedBtn = document.getElementById('notProgrammedBtn');
    const backBtn = document.getElementById('backBtn');
    const continueBtn = document.getElementById('continueBtn');
    const yesBtn = document.getElementById('yesBtn');
    const anotherYesBtn = document.getElementById('anotherYesBtn');

    // Verificação inicial
    if (verifyYesBtn) {
        verifyYesBtn.addEventListener('click', () => {
            showSection(verification, birthdayCheck);
            animateDialogs(birthdayCheck, [], 50, 800);
        });
    }

    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            const container = document.querySelector('.container');
            container.style.animation = 'spinAndScale 1s ease';
            addFloatingEmojis();
            
            // Adicionar efeito especial para o novo nome
            setTimeout(() => {
                container.style.animation = 'containerFloat 3s ease-in-out infinite';
                nameChange.classList.add('hidden');
                preparationQuestion.classList.remove('hidden');
                animateDialogs(preparationQuestion, [], 50, 800);
                
                // Fazer o novo nome aparecer com destaque
                const namePreview = document.querySelector('.name-preview');
                namePreview.style.transform = 'scale(0)';
                namePreview.style.opacity = '0';
                setTimeout(() => {
                    namePreview.style.transition = 'all 0.8s ease';
                    namePreview.style.transform = 'scale(1)';
                    namePreview.style.opacity = '1';
                }, 100);
            }, 1000);
        });
    }

    if (verifyNoBtn) {
        verifyNoBtn.addEventListener('click', () => {
            verification.classList.add('hidden');
            wrongPerson.classList.remove('hidden');
            setTimeout(() => {
                window.close();
            }, 3000);
        });
    }

    // Evento para confirmação de data correta
    if (birthYesBtn) {
        birthYesBtn.addEventListener('click', () => {
            const currentDialog = birthdayCheck.querySelector('.message');
            currentDialog.innerHTML = 'Há então é você mesmo quem estou procurando! (◍•ᴗ•◍)❤';
            
            setTimeout(() => {
                showSection(birthdayCheck, nameChange);
                animateDialogs(nameChange, [], 50, 800);
            }, 2000);
        });
    }

    // Evento para data incorreta
    if (birthNoBtn) {
        birthNoBtn.addEventListener('click', () => {
            showSection(birthdayCheck, wrongDani);
            setTimeout(() => {
                window.close();
            }, 3000);
        });
    }

    // Lógica original do pedido de namoro
    const noBtn = document.getElementById('noBtn');
    const celebration = document.getElementById('celebration');

    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    function celebrateYes() {
        document.querySelector('.buttons').style.display = 'none';
        
        // Criar efeito de confete
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }

        // Adicionar efeito de suspense antes de revelar a pegadinha
        setTimeout(() => {
            const heart = document.querySelector('.heart');
            if (heart) {
                heart.style.transform = 'rotate(45deg) scale(2)';
                heart.style.opacity = '0';
            }

            setTimeout(() => {
                celebration.classList.remove('hidden');
                
                // Nova implementação para animação do texto
                const title = celebration.querySelector('h2');
                const message = celebration.querySelector('.message');
                let delay = 0;
                
                // Animar título
                title.textContent = '';
                typeWriter(title, '(｡♥‿♥｡) Era pegadinha! (＾▽＾)', 50);
                delay += 1500;

                // Animar mensagem linha por linha
                setTimeout(() => {
                    message.innerHTML = '';
                    const lines = [
                        'O pedido de verdade vai ser pessoalmente! (◕‿◕✿)',
                        'Mas já sei qual vai ser sua resposta (｡♥‿♥｡)',
                        '<span class="highlight-name">Obrigado por testar a aplicação! (＾▽＾)</span>',
                        '<span class="subtle-text">Te vejo em breve! (´｡• ᵕ •｡`)</span>'
                    ];

                    let currentLine = 0;
                    function typeLine() {
                        if (currentLine < lines.length) {
                            const p = document.createElement('p');
                            message.appendChild(p);
                            
                            if (lines[currentLine].includes('<span')) {
                                p.innerHTML = lines[currentLine];
                                const span = p.querySelector('span');
                                span.textContent = '';
                                typeWriter(span, span.getAttribute('data-text') || span.textContent, 50);
                            } else {
                                typeWriter(p, lines[currentLine], 50);
                            }
                            
                            currentLine++;
                            setTimeout(typeLine, 1500);
                        } else {
                            // Adicionar emojis após completar o texto
                            const funKaomojis = ['(◕‿◕✿)', '(｡♥‿♥｡)', '(＾▽＾)', '(´｡• ᵕ •｡`)', '(◍•ᴗ•◍)'];
                            for (let i = 0; i < 10; i++) {
                                const emoji = document.createElement('div');
                                emoji.className = 'floating-emoji';
                                emoji.textContent = funKaomojis[Math.floor(Math.random() * funKaomojis.length)];
                                emoji.style.left = Math.random() * window.innerWidth + 'px';
                                document.body.appendChild(emoji);
                                setTimeout(() => emoji.remove(), 5000);
                            }
                        }
                    }
                    
                    typeLine();
                }, delay);

            }, 1000);
        }, 2000);
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', celebrateYes);
    }

    if (anotherYesBtn) {
        anotherYesBtn.addEventListener('click', celebrateYes);

        // Adicionar efeito de hover divertido
        anotherYesBtn.addEventListener('mouseover', () => {
            const phrases = [
                'Clica em mim! (◕‿◕✿)',
                'Eu sei que você quer! (｡♥‿♥｡)',
                'A outra opção é igual! (＾▽＾)',
                'Escolha sabiamente... ou não! ╮(︶▽︶)╭'
            ];
            anotherYesBtn.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        });

        anotherYesBtn.addEventListener('mouseout', () => {
            anotherYesBtn.textContent = 'Sim, aceito!';
        });
    }

    // Eventos para botões de preparação
    const readyBtn = document.getElementById('readyBtn');
    const notReadyBtn = document.getElementById('notReadyBtn');
    const maybeBtn = document.getElementById('maybeBtn');

    [readyBtn, notReadyBtn, maybeBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('mouseover', () => {
                const phrases = [
                    'Boa escolha! (◕‿◕✿)',
                    'Sabia decisão! (｡♥‿♥｡)',
                    'Essa é a resposta certa! (＾▽＾)',
                    'Continue assim! (´｡• ᵕ •｡`)'
                ];
                btn.textContent = phrases[Math.floor(Math.random() * phrases.length)];
            });

            btn.addEventListener('mouseout', (e) => {
                btn.textContent = btn.getAttribute('original-text') || e.target.originalText;
            });

            btn.addEventListener('click', () => {
                document.body.style.animation = 'rainbow 2s';
                addFloatingEmojis();
                preparationQuestion.classList.add('hidden');
                lastWarning.classList.remove('hidden');
                animateDialogs(lastWarning, [], 50, 800);
            });
        }
    });

    // Eventos para botões da última chance
    const continueAnyway = document.getElementById('continueAnyway');
    const imScared = document.getElementById('imScared');
    const noChoice = document.getElementById('noChoice');

    [continueAnyway, imScared, noChoice].forEach(btn => {
        if (btn) {
            btn.addEventListener('mouseover', () => {
                const lastPhrases = [
                    'Não tem volta! (｀･ω･´)ゞ',
                    'Decisão final! (◕‿◕✿)',
                    'Preparada? (｡♥‿♥｡)',
                    'Última chance... ou não! ╮(︶▽︶)╭'
                ];
                btn.textContent = lastPhrases[Math.floor(Math.random() * lastPhrases.length)];
            });

            btn.addEventListener('mouseout', (e) => {
                btn.textContent = btn.getAttribute('original-text') || e.target.originalText;
            });

            btn.addEventListener('click', () => {
                const heart = document.querySelector('.heart');
                heart.style.transform = 'rotate(45deg) scale(2)';
                heart.style.opacity = '0';
                addFloatingEmojis();
                
                setTimeout(() => {
                    heart.style.transform = 'rotate(45deg) scale(1)';
                    heart.style.opacity = '1';
                    lastWarning.classList.add('hidden');
                    mainQuestion.classList.remove('hidden');
                    animateDialogs(mainQuestion, [], 50, 1000);
                }, 1000);
            });
        }
    });

    // Corrigir eventos do botão não programado
    if (notProgrammedBtn && notProgrammed && backBtn) {
        notProgrammedBtn.addEventListener('click', () => {
            console.log('Botão não programado clicado'); // Debug
            verification.classList.add('hidden');
            notProgrammed.classList.remove('hidden');
            animateDialogs(notProgrammed, [], 50, 500);
            
            // Adicionar efeito de shake no título
            const title = notProgrammed.querySelector('.title');
            if (title) {
                title.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => title.style.animation = '', 500);
            }
            
            // Adicionar alguns emojis flutuantes de "bug"
            const bugEmojis = ['🐛', '🪲', '🦗', '⚠️'];
            for (let i = 0; i < 5; i++) {
                const emoji = document.createElement('div');
                emoji.className = 'floating-emoji';
                emoji.textContent = bugEmojis[Math.floor(Math.random() * bugEmojis.length)];
                emoji.style.left = Math.random() * window.innerWidth + 'px';
                document.body.appendChild(emoji);
                setTimeout(() => emoji.remove(), 5000);
            }
        });

        backBtn.addEventListener('click', () => {
            console.log('Botão voltar clicado'); // Debug
            notProgrammed.classList.add('hidden');
            verification.classList.remove('hidden');
            addFloatingEmojis();
        });

        // Efeito de hover mais óbvio
        notProgrammedBtn.addEventListener('mouseover', () => {
            notProgrammedBtn.style.transform = 'scale(1.1)';
            const bugPhrases = [
                'Tem certeza? (；一_一)',
                'Esse botão tá meio bugado... (・_・;)',
                'O estagiário que fez esse! (╯°□°）╯︵ ┻━┻',
                'Clica por sua conta e risco! (⊙﹏⊙∥)'
            ];
            notProgrammedBtn.textContent = bugPhrases[Math.floor(Math.random() * bugPhrases.length)];
        });

        notProgrammedBtn.addEventListener('mouseout', () => {
            notProgrammedBtn.style.transform = 'scale(1)';
            notProgrammedBtn.textContent = 'Ainda não programei essa opção 🤔';
        });
    } else {
        console.error('Alguns elementos não foram encontrados!');
    }

    // Salvar texto original dos botões
    document.querySelectorAll('.btn').forEach(btn => {
        btn.setAttribute('original-text', btn.textContent);
    });
});

function showSection(hideElement, showElement) {
    if (hideElement) {
        hideElement.style.opacity = '0';
        hideElement.style.transform = 'scale(0.9) translateY(20px)';
        setTimeout(() => hideElement.classList.add('hidden'), 500);
    }
    
    if (showElement) {
        showElement.classList.remove('hidden');
        requestAnimationFrame(() => {
            showElement.style.opacity = '1';
            showElement.style.transform = 'scale(1) translateY(0)';
        });
    }
}

// Melhorar efeito de confete
function createConfetti() {
    const colors = ['#ff6b8b', '#4CAF50', '#FFD700', '#FF69B4', '#87CEEB', '#FFF'];
    const shapes = ['circle', 'square', 'triangle'];
    
    const confetti = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = confetti.style.width;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.position = 'absolute';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-20px';
    
    if (shape === 'triangle') {
        confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
    } else if (shape === 'square') {
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    } else {
        confetti.style.borderRadius = '50%';
    }
    
    confetti.style.boxShadow = '0 0 10px rgba(255,255,255,0.3)';
    confetti.style.filter = 'blur(0.5px)';
    confetti.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
    document.body.appendChild(confetti);

    const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0)', opacity: 1 },
        { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(.37,0,.63,1)'
    });

    animation.onfinish = () => confetti.remove();
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#4CAF50', '#FFD700', '#FF69B4', '#87CEEB'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function addFloatingEmojis() {
    const emojis = ['💝', '💖', '💕', '💗', '💓', '💞'];
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
        emoji.style.opacity = Math.random() * 0.5 + 0.5;
        emoji.style.filter = 'blur(0.5px)';
        emoji.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 5000);
    }
}

function dancingTitle(element, duration = 2000) {
    const originalTransform = element.style.transform;
    const dances = [
        'translateY(-10px) rotate(3deg)',
        'translateY(5px) rotate(-2deg)',
        'translateY(-7px) rotate(1deg)',
        'translateY(3px) rotate(-3deg)'
    ];
    
    let i = 0;
    const interval = setInterval(() => {
        element.style.transform = dances[i % dances.length];
        i++;
    }, 200);
    
    setTimeout(() => {
        clearInterval(interval);
        element.style.transform = originalTransform;
    }, duration);
}

function typeWriter(element, text, speed = 50) {
    let i = 0;
    const originalText = text.trim();
    element.textContent = '';
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        element.style.transition = 'all 0.3s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
    
    function type() {
        if (i < originalText.length) {
            element.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function animateDialogs(container, messages, speed = 50, delayBetween = 1000) {
    const elements = container.querySelectorAll('.message, .title');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            const originalHTML = element.innerHTML;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalHTML;
            element.innerHTML = '';

            function processNode(node) {
                return new Promise(resolve => {
                    if (node.nodeType === 3) { // Texto
                        let text = node.textContent.trim();
                        let i = 0;
                        
                        function typeText() {
                            if (i < text.length) {
                                element.innerHTML += text[i];
                                i++;
                                setTimeout(typeText, speed);
                            } else {
                                resolve();
                            }
                        }
                        typeText();
                    } else if (node.nodeType === 1) { // Elemento
                        if (node.tagName === 'BR') {
                            element.innerHTML += '<br>';
                            resolve();
                        } else if (node.tagName === 'SPAN') {
                            const span = document.createElement('span');
                            span.className = node.className;
                            element.appendChild(span);
                            let text = node.textContent;
                            let i = 0;

                            function typeSpan() {
                                if (i < text.length) {
                                    span.textContent += text[i];
                                    i++;
                                    setTimeout(typeSpan, speed);
                                } else {
                                    resolve();
                                }
                            }
                            typeSpan();
                        }
                    }
                });
            }

            async function animateElement() {
                const nodes = Array.from(tempDiv.childNodes);
                for (const node of nodes) {
                    await processNode(node);
                }
            }

            animateElement();
        }, index * delayBetween);
    });
}
