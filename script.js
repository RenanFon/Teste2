document.addEventListener('DOMContentLoaded', () => {
    // Manter apenas os elementos principais
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
            nameChange.classList.add('hidden');
            preparationQuestion.classList.remove('hidden');
            animateDialogs(preparationQuestion, [], 50, 800);
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
            currentDialog.innerHTML = 'Autenticação bem-sucedida!<br>Identificação positiva confirmada.<br>Iniciando protocolo especial...';
            
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
        
        const title = celebration.querySelector('h2');
        const message = celebration.querySelector('.message');
        
        celebration.classList.remove('hidden');
        
        const systemLogs = [
            '<div class="console-log">',
            '<div class="log-entry">> Iniciando processo de validação...</div>',
            '<div class="log-entry">> Verificando compatibilidade...</div>',
            '<div class="log-entry">> Compatibilidade: 100%</div>',
            '<div class="log-entry">> Atualizando banco de dados...</div>',
            '<div class="log-entry">> Salvando alterações...</div>',
            '<div class="log-entry">> Processando pedido de namoro...</div>',
            '<div class="log-entry error">> ERRO CRÍTICO DETECTADO!</div>',
            '<div class="log-entry error">> Código de erro: NAM0R0-404</div>',
            '<div class="log-entry error">> Motivo: Pedido virtual não autorizado</div>',
            '<div class="log-entry">> Iniciando protocolo de contingência...</div>',
            '</div>',
            'ATENÇÃO: Pedido virtual rejeitado pelo sistema!',
            'Motivo: Renan Fonseca deve fazer o pedido pessoalmente.',
            '<div class="console-log">',
            '<div class="log-entry">> Preparando ambiente real...</div>',
            '<div class="log-entry">> Calculando melhor momento...</div>',
            '<div class="log-entry">> Enviando relatório para Renan...</div>',
            '<div class="log-entry success">> Processo finalizado com sucesso!</div>',
            '<div class="log-entry">> Em breve: commit -m "Início do namoro" ❤</div>',
            '</div>'
        ];
    
        let currentLine = 0;
        function typeLine() {
            if (currentLine < systemLogs.length) {
                const p = document.createElement('div');
                message.appendChild(p);
                
                if (systemLogs[currentLine].includes('class="log-entry"')) {
                    p.outerHTML = systemLogs[currentLine];
                    const lastLog = message.querySelector('.log-entry:last-child');
                    setTimeout(() => lastLog.classList.add('show'), 100);
                    currentLine++;
                    setTimeout(typeLine, 800);
                } else if (systemLogs[currentLine].includes('class="console-log"')) {
                    p.outerHTML = systemLogs[currentLine];
                    currentLine++;
                    setTimeout(typeLine, 500);
                } else {
                    typeWriter(p, systemLogs[currentLine], 50);
                    currentLine++;
                    setTimeout(typeLine, 2000);
                }
                
                // Scroll automático
                const scrollToBottom = () => {
                    const containerHeight = document.querySelector('.container').scrollHeight;
                    window.scrollTo({
                        top: containerHeight,
                        behavior: 'smooth'
                    });
                };
                
                if (currentLine > 2) {
                    setTimeout(scrollToBottom, 200);
                }
            }
        }
    
        setTimeout(() => {
            message.innerHTML = '';
            typeLine();
        }, 1000);
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
            btn.addEventListener('click', () => {
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
            btn.addEventListener('click', () => {
                lastWarning.classList.add('hidden');
                mainQuestion.classList.remove('hidden');
                animateDialogs(mainQuestion, [], 50, 1000);
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
        });

        // Efeito de hover mais óbvio
        notProgrammedBtn.addEventListener('mouseover', () => {
            notProgrammedBtn.style.transform = 'scale(1.1)';
            const bugPhrases = [
                'ALERTA: FUNÇÃO INSTÁVEL',
                'AVISO: MÓDULO NÃO TESTADO',
                'ERRO: ACESSO NÃO PERMITIDO',
                'FALHA: OPERAÇÃO INVÁLIDA'
            ];
            notProgrammedBtn.textContent = bugPhrases[Math.floor(Math.random() * bugPhrases.length)];
        });

        notProgrammedBtn.addEventListener('mouseout', () => {
            notProgrammedBtn.style.transform = 'scale(1)';
            notProgrammedBtn.textContent = 'OPÇÃO NÃO IMPLEMENTADA';
        });

    } else {
        console.error('Alguns elementos não foram encontrados!');
    }

    // Salvar texto original dos botões
    document.querySelectorAll('.btn').forEach(btn => {
        btn.setAttribute('original-text', btn.textContent);
    });
});

// Ajustar função showSection para melhor comportamento mobile
function showSection(hideElement, showElement) {
    if (hideElement) {
        hideElement.classList.add('hidden');
    }
    
    if (showElement) {
        showElement.classList.remove('hidden');
        // Reset do scroll
        window.scrollTo(0, 0);
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
