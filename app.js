// 应用数据
const appsData = {
    ai: [
        {
            id: 'chatgpt',
            name: 'ChatGPT',
            description: '强大的AI对话助手，能够回答问题、协助写作、编程等',
            icon: '🤖',
            category: 'AI助手',
            rating: 4.8,
            users: '100M+',
            url: 'https://chatgpt.com'
        },
        {
            id: 'midjourney',
            name: 'Midjourney',
            description: '顶级AI绘画工具，通过描述生成高质量艺术作品',
            icon: '🎨',
            category: 'AI绘画',
            rating: 4.7,
            users: '20M+',
            url: 'https://midjourney.com'
        },
        {
            id: 'dalle',
            name: 'DALL·E 3',
            description: 'OpenAI推出的AI图像生成工具，创造惊艳的视觉内容',
            icon: '🖼️',
            category: 'AI绘画',
            rating: 4.6,
            users: '50M+',
            url: 'https://openai.com/dall-e-3'
        },
        {
            id: 'notion-ai',
            name: 'Notion AI',
            description: '集成在Notion中的AI助手，提升工作效率',
            icon: '📝',
            category: 'AI助手',
            rating: 4.5,
            users: '30M+',
            url: 'https://notion.so'
        },
        {
            id: 'huggingface',
            name: 'Hugging Face',
            description: 'AI模型社区平台，提供各种预训练模型',
            icon: '🤗',
            category: 'AI平台',
            rating: 4.4,
            users: '10M+',
            url: 'https://huggingface.co'
        },
        {
            id: 'runwayml',
            name: 'Runway',
            description: 'AI视频生成和编辑工具，创意无限',
            icon: '🎬',
            category: 'AI视频',
            rating: 4.3,
            users: '5M+',
            url: 'https://runwayml.com'
        },
        {
            id: 'stable-diffusion',
            name: 'Stable Diffusion',
            description: '开源AI图像生成模型，免费且强大',
            icon: '🎭',
            category: 'AI绘画',
            rating: 4.5,
            users: '15M+',
            url: 'https://stability.ai'
        },
        {
            id: 'anthropic',
            name: 'Claude',
            description: 'Anthropic开发的AI助手，安全可靠',
            icon: '🧠',
            category: 'AI助手',
            rating: 4.6,
            users: '8M+',
            url: 'https://claude.ai'
        }
    ],
    web3: [
        {
            id: 'uniswap',
            name: 'Uniswap',
            description: '去中心化交易所，支持各种代币交易',
            icon: '🦄',
            category: 'DEX',
            rating: 4.5,
            users: '4M+',
            url: 'https://uniswap.org'
        },
        {
            id: 'opensea',
            name: 'OpenSea',
            description: '最大的NFT市场，买卖数字艺术品',
            icon: '🌊',
            category: 'NFT',
            rating: 4.2,
            users: '1.8M+',
            url: 'https://opensea.io'
        },
        {
            id: 'metamask',
            name: 'MetaMask',
            description: '最受欢迎的以太坊钱包，Web3入口',
            icon: '🦊',
            category: '钱包',
            rating: 4.4,
            users: '30M+',
            url: 'https://metamask.io'
        },
        {
            id: 'pancakeswap',
            name: 'PancakeSwap',
            description: 'BSC链上的去中心化交易所',
            icon: '🥞',
            category: 'DEX',
            rating: 4.3,
            users: '2M+',
            url: 'https://pancakeswap.finance'
        },
        {
            id: 'aave',
            name: 'Aave',
            description: '去中心化借贷协议，赚取利息',
            icon: '👻',
            category: 'DeFi',
            rating: 4.4,
            users: '500K+',
            url: 'https://aave.com'
        },
        {
            id: 'compound',
            name: 'Compound',
            description: '去中心化借贷平台，自动化利率',
            icon: '🏦',
            category: 'DeFi',
            rating: 4.2,
            users: '300K+',
            url: 'https://compound.finance'
        }
    ],
    tools: [
        {
            id: 'vscode',
            name: 'VS Code',
            description: '微软开发的免费代码编辑器',
            icon: '💻',
            category: '编辑器',
            rating: 4.8,
            users: '50M+',
            url: 'https://code.visualstudio.com'
        },
        {
            id: 'github',
            name: 'GitHub',
            description: '全球最大的代码托管平台',
            icon: '🐙',
            category: '版本控制',
            rating: 4.7,
            users: '100M+',
            url: 'https://github.com'
        },
        {
            id: 'figma',
            name: 'Figma',
            description: '协作式界面设计工具',
            icon: '🎨',
            category: '设计',
            rating: 4.6,
            users: '20M+',
            url: 'https://figma.com'
        },
        {
            id: 'vercel',
            name: 'Vercel',
            description: '前端应用部署平台',
            icon: '⚡',
            category: '部署',
            rating: 4.5,
            users: '5M+',
            url: 'https://vercel.com'
        },
        {
            id: 'postman',
            name: 'Postman',
            description: 'API开发测试工具',
            icon: '📮',
            category: 'API',
            rating: 4.4,
            users: '25M+',
            url: 'https://postman.com'
        },
        {
            id: 'docker',
            name: 'Docker',
            description: '容器化应用部署平台',
            icon: '🐳',
            category: '容器',
            rating: 4.5,
            users: '15M+',
            url: 'https://docker.com'
        },
        {
            id: 'slack',
            name: 'Slack',
            description: '团队协作通讯工具',
            icon: '💬',
            category: '协作',
            rating: 4.3,
            users: '20M+',
            url: 'https://slack.com'
        },
        {
            id: 'notion',
            name: 'Notion',
            description: '全能的笔记和协作工具',
            icon: '📖',
            category: '笔记',
            rating: 4.6,
            users: '30M+',
            url: 'https://notion.so'
        }
    ],
    learn: [
        {
            id: 'coursera',
            name: 'Coursera',
            description: '世界知名大学的在线课程平台',
            icon: '🎓',
            category: '在线教育',
            rating: 4.5,
            users: '100M+',
            url: 'https://coursera.org'
        },
        {
            id: 'youtube',
            name: 'YouTube',
            description: '丰富的免费学习视频资源',
            icon: '📺',
            category: '视频学习',
            rating: 4.4,
            users: '2B+',
            url: 'https://youtube.com'
        },
        {
            id: 'mdn',
            name: 'MDN Web Docs',
            description: 'Web开发的权威文档和教程',
            icon: '🌐',
            category: 'Web开发',
            rating: 4.8,
            users: '50M+',
            url: 'https://developer.mozilla.org'
        },
        {
            id: 'stackoverflow',
            name: 'Stack Overflow',
            description: '程序员问答社区',
            icon: '📚',
            category: '问答',
            rating: 4.6,
            users: '100M+',
            url: 'https://stackoverflow.com'
        }
    ],
    utils: [
        {
            id: 'canva',
            name: 'Canva',
            description: '在线设计工具，轻松创建各种设计',
            icon: '🎨',
            category: '设计',
            rating: 4.7,
            users: '100M+',
            url: 'https://canva.com'
        },
        {
            id: 'grammarly',
            name: 'Grammarly',
            description: '英语语法检查和写作助手',
            icon: '✍️',
            category: '写作',
            rating: 4.5,
            users: '30M+',
            url: 'https://grammarly.com'
        },
        {
            id: 'google-translate',
            name: 'Google Translate',
            description: '强大的在线翻译工具',
            icon: '🌍',
            category: '翻译',
            rating: 4.3,
            users: '500M+',
            url: 'https://translate.google.com'
        },
        {
            id: 'dropbox',
            name: 'Dropbox',
            description: '云存储和文件同步服务',
            icon: '📦',
            category: '云存储',
            rating: 4.4,
            users: '700M+',
            url: 'https://dropbox.com'
        },
        {
            id: 'zoom',
            name: 'Zoom',
            description: '视频会议和远程协作工具',
            icon: '📹',
            category: '视频会议',
            rating: 4.2,
            users: '300M+',
            url: 'https://zoom.us'
        },
        {
            id: 'trello',
            name: 'Trello',
            description: '项目管理和任务协作工具',
            icon: '📋',
            category: '项目管理',
            rating: 4.3,
            users: '50M+',
            url: 'https://trello.com'
        }
    ]
};

// 应用状态
let currentSection = 'ai-section';
let deferredPrompt = null;
let allApps = [];

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 注册 Service Worker
    registerServiceWorker();
    
    // 初始化应用数据
    initializeApps();
    
    // 绑定事件
    bindEvents();
    
    // 检查PWA安装
    checkPWAInstall();
});



// 注册 Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker 注册成功:', registration);
            })
            .catch(error => {
                console.log('Service Worker 注册失败:', error);
            });
    }
}

// 初始化应用
function initializeApps() {
    // 合并所有应用数据
    allApps = [
        ...appsData.ai.map(app => ({ ...app, section: 'ai' })),
        ...appsData.web3.map(app => ({ ...app, section: 'web3' })),
        ...appsData.tools.map(app => ({ ...app, section: 'tools' })),
        ...appsData.learn.map(app => ({ ...app, section: 'learn' })),
        ...appsData.utils.map(app => ({ ...app, section: 'utils' }))
    ];
    
    // 渲染各个板块
    renderApps('ai', appsData.ai);
    renderApps('web3', appsData.web3);
    renderApps('tools', appsData.tools);
    renderApps('learn', appsData.learn);
    renderApps('utils', appsData.utils);
    
    // 显示第一个板块
    showSection('ai-section');
}

// 渲染应用卡片
function renderApps(section, apps) {
    const container = document.getElementById(`${section}Cards`);
    container.innerHTML = apps.map(app => `
        <div class="app-card" data-app-id="${app.id}">
            <div class="app-header">
                <div class="app-icon">${app.icon}</div>
                <div class="app-info">
                    <h3>${app.name}</h3>
                    <span class="app-category">${app.category}</span>
                </div>
            </div>
            <p class="app-description">${app.description}</p>
            <div class="app-stats">
                <span class="stat">评分: <span class="rating">${app.rating}</span></span>
                <span class="stat">用户: <span class="users">${app.users}</span></span>
            </div>
        </div>
    `).join('');
}

// 绑定事件
function bindEvents() {
    // 底部导航
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // 防止事件冒泡
            
            const section = item.dataset.section;
            console.log('底部导航被点击:', section);
            
            // 切换到目标板块
            showSection(section);
            
            // 更新导航状态
            updateBottomNavActive(section);
        });
    });
    
    // 搜索功能
    const searchBtn = document.getElementById('searchBtn');
    const searchContainer = document.getElementById('searchContainer');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        searchContainer.classList.add('active');
        searchInput.focus();
    });
    
    searchClose.addEventListener('click', () => {
        searchContainer.classList.remove('active');
        searchInput.value = '';
        showSection(currentSection);
    });
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query) {
            searchApps(query);
        } else {
            showSection(currentSection);
        }
    });
    
    // 应用卡片点击
    document.addEventListener('click', (e) => {
        const appCard = e.target.closest('.app-card');
        if (appCard) {
            const appId = appCard.dataset.appId;
            showAppDetail(appId);
        }
    });
    
    // 模态框关闭
    const modal = document.getElementById('app-modal');
    const modalClose = document.getElementById('modalClose');
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // PWA安装
    const installBtn = document.getElementById('installBtn');
    const dismissBtn = document.getElementById('dismissBtn');
    const installPrompt = document.getElementById('install-prompt');
    
    // 调试：检查PWA元素是否存在
    console.log('🔍 PWA元素检查:', {
        installBtn: !!installBtn,
        dismissBtn: !!dismissBtn,
        installPrompt: !!installPrompt
    });
    
    // 调试：检查元素的实际状态
    if (installBtn) {
        console.log('📱 安装按钮状态:', {
            style: window.getComputedStyle(installBtn),
            pointerEvents: window.getComputedStyle(installBtn).pointerEvents,
            cursor: window.getComputedStyle(installBtn).cursor,
            zIndex: window.getComputedStyle(installBtn).zIndex
        });
    }
    
    if (dismissBtn) {
        console.log('❌ 取消按钮状态:', {
            style: window.getComputedStyle(dismissBtn),
            pointerEvents: window.getComputedStyle(dismissBtn).pointerEvents,
            cursor: window.getComputedStyle(dismissBtn).cursor,
            zIndex: window.getComputedStyle(dismissBtn).zIndex
        });
    }
    
    // 确保PWA安装相关元素都存在后再绑定事件
    if (installBtn && dismissBtn && installPrompt) {
        console.log('✅ PWA安装按钮事件绑定开始...');
        
        installBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('安装按钮被点击, deferredPrompt:', deferredPrompt);
            
            if (deferredPrompt) {
                // 标准PWA安装流程
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('用户接受了安装');
                        alert('🎉 应用正在安装到桌面！');
                    } else {
                        console.log('用户拒绝了安装');
                    }
                    deferredPrompt = null;
                    installPrompt.classList.remove('show');
                });
            } else {
                // 备用方案：为不支持beforeinstallprompt的浏览器提供指引
                showInstallInstructions();
            }
        });
        
        dismissBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('✅ 取消按钮被点击');
            
            if (installPrompt) {
                installPrompt.classList.remove('show');
                console.log('✅ 安装提示已隐藏');
            }
            
            localStorage.setItem('pwa-dismissed', 'true');
            console.log('✅ 已记录用户拒绝安装');
        });
        
        console.log('✅ PWA安装按钮事件绑定完成');
        
        // 添加全局测试函数
        window.testPWAButtons = function() {
            console.log('🧪 开始测试PWA按钮...');
            
            // 测试安装按钮
            if (installBtn) {
                console.log('🔘 点击安装按钮测试...');
                installBtn.click();
            }
            
            // 测试取消按钮（延迟1秒执行）
            setTimeout(() => {
                if (dismissBtn) {
                    console.log('🔘 点击取消按钮测试...');
                    dismissBtn.click();
                }
            }, 1000);
        };
        
        console.log('💡 提示：在控制台中输入 testPWAButtons() 来测试按钮功能');
    } else {
        console.error('❌ PWA安装元素未找到:', {
            installBtn: !!installBtn,
            dismissBtn: !!dismissBtn,
            installPrompt: !!installPrompt
        });
    }
    
    // 侧边菜单功能
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('side-menu');
    const sideMenuClose = document.getElementById('sideMenuClose');
    const sideMenuOverlay = document.getElementById('sideMenuOverlay');
    
    // 确保所有元素都存在后再绑定事件
    if (menuBtn && sideMenu && sideMenuClose && sideMenuOverlay) {
        // 打开侧边菜单
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('菜单按钮被点击');
            sideMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        // 关闭侧边菜单
        function closeSideMenu() {
            sideMenu.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        
        sideMenuClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeSideMenu();
        });
        
        sideMenuOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // 只有直接点击overlay才关闭，点击菜单内容不关闭
            if (e.target === sideMenuOverlay) {
                closeSideMenu();
            }
        });
        
        // 防止菜单内容区域的点击事件冒泡
        const sideMenuContent = document.querySelector('.side-menu-content');
        if (sideMenuContent) {
            sideMenuContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        
        // 为统计信息项目添加点击事件
        const clickableStats = document.querySelectorAll('.clickable-stat');
        clickableStats.forEach(statItem => {
            statItem.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const targetSection = statItem.dataset.section;
                console.log('统计项目被点击:', targetSection);
                
                if (targetSection) {
                    // 切换到目标板块
                    showSection(targetSection);
                    
                    // 更新底部导航的active状态
                    updateBottomNavActive(targetSection);
                    
                    // 关闭侧边菜单
                    closeSideMenu();
                }
            });
        });
        
        // ESC键关闭菜单
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sideMenu.classList.contains('show')) {
                e.preventDefault();
                closeSideMenu();
            }
        });
        
        // 菜单功能按钮
        const toggleTheme = document.getElementById('toggleTheme');
        const clearCache = document.getElementById('clearCache');
        const refreshData = document.getElementById('refreshData');
        const aboutApp = document.getElementById('aboutApp');
        
        // 深色模式切换
        if (toggleTheme) {
            toggleTheme.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('深色模式按钮被点击');
                
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('dark-mode', isDark);
                
                // 更新按钮文字
                const icon = toggleTheme.querySelector('.option-icon');
                const text = toggleTheme.querySelector('.option-text');
                if (isDark) {
                    icon.textContent = '☀️';
                    text.textContent = '浅色模式';
                } else {
                    icon.textContent = '🌙';
                    text.textContent = '深色模式';
                }
            });
        }
        
        // 清除缓存
        if (clearCache) {
            clearCache.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('清除缓存按钮被点击');
                
                try {
                    if ('caches' in window) {
                        const cacheNames = await caches.keys();
                        await Promise.all(cacheNames.map(name => caches.delete(name)));
                        alert('✅ 缓存已清除');
                    } else {
                        alert('❌ 浏览器不支持缓存管理');
                    }
                } catch (error) {
                    alert('❌ 清除缓存失败: ' + error.message);
                }
            });
        }
        
        // 刷新数据
        if (refreshData) {
            refreshData.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('刷新数据按钮被点击');
                window.location.reload();
            });
        }
        
        // 关于应用
        if (aboutApp) {
            aboutApp.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('关于应用按钮被点击');
                
                const aboutModal = createAboutModal();
                document.body.appendChild(aboutModal);
                aboutModal.classList.add('show');
                closeSideMenu();
            });
        }
    } else {
        console.error('侧边菜单元素未找到:', {
            menuBtn: !!menuBtn,
            sideMenu: !!sideMenu,
            sideMenuClose: !!sideMenuClose,
            sideMenuOverlay: !!sideMenuOverlay
        });
    }
}

// 显示指定板块
function showSection(sectionId) {
    // 隐藏所有板块
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // 显示指定板块
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
    }
}

// 更新底部导航的active状态
function updateBottomNavActive(sectionId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => nav.classList.remove('active'));
    
    // 找到对应的导航项并设置为active
    const targetNav = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetNav) {
        targetNav.classList.add('active');
    }
}

// 搜索应用
function searchApps(query) {
    const filteredApps = allApps.filter(app => 
        app.name.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query)
    );
    
    // 隐藏所有板块
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // 显示搜索结果
    showSearchResults(filteredApps);
}

// 显示搜索结果
function showSearchResults(apps) {
    // 创建临时搜索结果容器
    let searchSection = document.getElementById('search-results');
    if (!searchSection) {
        searchSection = document.createElement('section');
        searchSection.id = 'search-results';
        searchSection.className = 'section active';
        searchSection.innerHTML = `
            <div class="section-header">
                <h2>🔍 搜索结果</h2>
                <span class="section-count">${apps.length}个结果</span>
            </div>
            <div class="cards-grid" id="searchCards"></div>
        `;
        document.querySelector('.main-content').appendChild(searchSection);
    } else {
        searchSection.classList.add('active');
        searchSection.querySelector('.section-count').textContent = `${apps.length}个结果`;
    }
    
    // 渲染搜索结果
    const searchCards = document.getElementById('searchCards');
    searchCards.innerHTML = apps.map(app => `
        <div class="app-card" data-app-id="${app.id}">
            <div class="app-header">
                <div class="app-icon">${app.icon}</div>
                <div class="app-info">
                    <h3>${app.name}</h3>
                    <span class="app-category">${app.category}</span>
                </div>
            </div>
            <p class="app-description">${app.description}</p>
            <div class="app-stats">
                <span class="stat">评分: <span class="rating">${app.rating}</span></span>
                <span class="stat">用户: <span class="users">${app.users}</span></span>
            </div>
        </div>
    `).join('');
}

// 显示应用详情
function showAppDetail(appId) {
    const app = allApps.find(a => a.id === appId);
    if (!app) return;
    
    const modal = document.getElementById('app-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDescription = document.getElementById('modal-description');
    const modalRating = document.getElementById('modal-rating');
    const modalUsers = document.getElementById('modal-users');
    const modalVisit = document.getElementById('modal-visit');
    
    modalTitle.textContent = app.name;
    modalIcon.textContent = app.icon;
    modalDescription.textContent = app.description;
    modalRating.textContent = app.rating;
    modalUsers.textContent = app.users;
    
    modalVisit.onclick = () => {
        window.open(app.url, '_blank');
    };
    
    modal.classList.add('show');
}

// 检查PWA安装
function checkPWAInstall() {
    console.log('🔍 检查PWA安装支持...');
    
    // 添加更多调试信息
    console.log('浏览器信息:', {
        userAgent: navigator.userAgent,
        standalone: window.navigator.standalone,
        beforeinstallprompt: 'beforeinstallprompt' in window
    });
    
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('✅ beforeinstallprompt 事件触发');
        e.preventDefault();
        deferredPrompt = e;
        
        // 如果用户之前没有拒绝过，显示安装提示
        if (!localStorage.getItem('pwa-dismissed')) {
            setTimeout(() => {
                const installPromptEl = document.getElementById('install-prompt');
                if (installPromptEl) {
                    installPromptEl.classList.add('show');
                    console.log('📱 显示安装提示');
                }
            }, 3000);
        }
    });
    
    // 检查是否已经安装
    window.addEventListener('appinstalled', (evt) => {
        console.log('✅ PWA已安装');
        const installPromptEl = document.getElementById('install-prompt');
        if (installPromptEl) {
            installPromptEl.classList.remove('show');
        }
    });
    
    // 备用方案：如果5秒后仍然没有触发beforeinstallprompt，显示安装提示
    setTimeout(() => {
        if (!deferredPrompt && !localStorage.getItem('pwa-dismissed')) {
            console.log('⚠️ beforeinstallprompt 未触发，显示备用安装提示');
            const installPromptEl = document.getElementById('install-prompt');
            if (installPromptEl) {
                installPromptEl.classList.add('show');
            }
        }
    }, 5000);
}

// 分享功能
function shareApp(app) {
    if (navigator.share) {
        navigator.share({
            title: app.name,
            text: app.description,
            url: app.url
        });
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(app.url).then(() => {
            alert('链接已复制到剪贴板');
        });
    }
}

// 模态框分享按钮
document.getElementById('modal-share').addEventListener('click', () => {
    const modalTitle = document.getElementById('modal-title').textContent;
    const app = allApps.find(a => a.name === modalTitle);
    if (app) {
        shareApp(app);
    }
});

// 防止页面刷新时回到顶部
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

// 创建关于应用模态框
function createAboutModal() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>关于 AI与Web3导航</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <img src="logo.svg" alt="Logo" style="width: 60px; height: 60px; margin-bottom: 1rem;">
                    <h2 style="margin: 0; color: #6366f1;">AI与Web3导航</h2>
                    <p style="color: #6b7280; margin: 0.5rem 0;">v1.0.0</p>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: #374151; margin-bottom: 0.5rem;">📱 应用特性</h4>
                    <ul style="color: #6b7280; margin: 0; padding-left: 1.5rem;">
                        <li>PWA 渐进式网络应用</li>
                        <li>离线访问支持</li>
                        <li>响应式设计</li>
                        <li>深色模式</li>
                        <li>可安装到桌面</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: #374151; margin-bottom: 0.5rem;">🎯 收录内容</h4>
                    <ul style="color: #6b7280; margin: 0; padding-left: 1.5rem;">
                        <li>32+ 精选应用和工具</li>
                        <li>AI 应用 (8个)</li>
                        <li>Web3 应用 (6个)</li>
                        <li>开发工具 (8个)</li>
                        <li>学习资源 (4个)</li>
                        <li>实用工具 (6个)</li>
                    </ul>
                </div>
                
                <div style="text-align: center; margin-top: 1.5rem;">
                    <p style="color: #6b7280; font-size: 0.9rem;">
                        © 2024 AI与Web3导航<br>
                        探索未来科技应用
                    </p>
                </div>
            </div>
        </div>
    `;
    
    // 点击外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    return modal;
}

// 初始化深色模式
function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        
        // 更新菜单按钮状态
        setTimeout(() => {
            const toggleTheme = document.getElementById('toggleTheme');
            if (toggleTheme) {
                const icon = toggleTheme.querySelector('.option-icon');
                const text = toggleTheme.querySelector('.option-text');
                icon.textContent = '☀️';
                text.textContent = '浅色模式';
            }
        }, 100);
    }
}

// 页面加载完成后初始化深色模式
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
});

// 调试：验证页面加载状态
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('🔍 页面加载状态检查:');
        console.log('menuBtn:', document.getElementById('menuBtn'));
        console.log('side-menu:', document.getElementById('side-menu'));
        console.log('bottom-nav:', document.querySelector('.bottom-nav'));
        console.log('nav-items:', document.querySelectorAll('.nav-item').length);
    }, 3000);
});

// PWA安装指导函数 - 为不支持beforeinstallprompt的浏览器提供手动安装指引
function showInstallInstructions() {
    console.log('📱 显示PWA安装指导');
    
    // 检测浏览器类型
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
    const isChrome = /chrome/.test(userAgent);
    const isEdge = /edge/.test(userAgent);
    const isFirefox = /firefox/.test(userAgent);
    
    let instructions = '';
    let browserName = '浏览器';
    
    // 根据不同浏览器提供不同的安装指引
    if (isIOS) {
        browserName = 'Safari';
        instructions = `
            <h4>📱 在 iPhone/iPad 上安装：</h4>
            <ol style="text-align: left; margin: 1rem 0; padding-left: 1.5rem;">
                <li>点击底部的 <strong>分享按钮 📤</strong></li>
                <li>向下滚动找到 <strong>"添加到主屏幕"</strong></li>
                <li>点击 <strong>"添加"</strong> 确认安装</li>
                <li>应用图标将出现在桌面上！</li>
            </ol>
        `;
    } else if (isSafari) {
        browserName = 'Safari';
        instructions = `
            <h4>🖥️ 在 Safari 上安装：</h4>
            <ol style="text-align: left; margin: 1rem 0; padding-left: 1.5rem;">
                <li>点击菜单栏中的 <strong>"文件"</strong></li>
                <li>选择 <strong>"添加到程序坞"</strong></li>
                <li>或者在地址栏右侧查找安装图标</li>
                <li>确认安装后即可在程序坞中找到应用</li>
            </ol>
        `;
    } else if (isChrome) {
        browserName = 'Chrome';
        instructions = `
            <h4>🌐 在 Chrome 上安装：</h4>
            <ol style="text-align: left; margin: 1rem 0; padding-left: 1.5rem;">
                <li>查看地址栏右侧的 <strong>安装图标 ⬇️</strong></li>
                <li>点击图标选择 <strong>"安装应用"</strong></li>
                <li>或者点击菜单 ⋮ → <strong>"安装应用"</strong></li>
                <li>确认后应用将安装到桌面</li>
            </ol>
        `;
    } else if (isEdge) {
        browserName = 'Edge';
        instructions = `
            <h4>🔷 在 Edge 上安装：</h4>
            <ol style="text-align: left; margin: 1rem 0; padding-left: 1.5rem;">
                <li>点击地址栏右侧的 <strong>安装图标</strong></li>
                <li>选择 <strong>"安装此站点为应用"</strong></li>
                <li>或者点击菜单 ⋯ → <strong>"应用" → "将此站点安装为应用"</strong></li>
                <li>确认安装到桌面</li>
            </ol>
        `;
    } else if (isFirefox) {
        browserName = 'Firefox';
        instructions = `
            <h4>🔥 在 Firefox 上安装：</h4>
            <ol style="text-align: left; margin: 1rem 0; padding-left: 1.5rem;">
                <li>Firefox 目前对 PWA 的支持有限</li>
                <li>建议使用 <strong>Chrome</strong> 或 <strong>Edge</strong> 浏览器</li>
                <li>或者直接将此页面添加到书签栏</li>
                <li>以便快速访问</li>
            </ol>
        `;
    } else {
        instructions = `
            <h4>🌐 通用安装方法：</h4>
            <ol style="text-align: left; margin: 1rem 0; padding-left: 1.5rem;">
                <li>查找地址栏附近的 <strong>安装图标</strong></li>
                <li>或查看浏览器菜单中的 <strong>"安装应用"</strong> 选项</li>
                <li>点击确认安装到桌面</li>
                <li>也可以将此页面添加到收藏夹</li>
            </ol>
        `;
    }
    
    // 创建安装指导模态框
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>📱 安装到桌面</h3>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <img src="logo.svg" alt="Logo" style="width: 60px; height: 60px; margin-bottom: 1rem;">
                    <h2 style="margin: 0; color: #e56045;">AI与Web3导航</h2>
                    <p style="color: #6b7280; margin: 0.5rem 0;">将应用安装到${browserName}桌面</p>
                </div>
                
                ${instructions}
                
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
                    <h4 style="color: #374151; margin: 0 0 0.5rem 0;">✨ 安装后的优势：</h4>
                    <ul style="color: #6b7280; margin: 0; padding-left: 1.5rem; text-align: left;">
                        <li>🚀 更快的启动速度</li>
                        <li>📱 独立的应用窗口</li>
                        <li>🔒 离线访问支持</li>
                        <li>🎯 桌面快捷方式</li>
                    </ul>
                </div>
                
                <div style="text-align: center; margin-top: 1rem;">
                    <button onclick="this.closest('.modal').remove()" 
                            style="background: #e56045; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; cursor: pointer; font-size: 1rem;">
                        我知道了
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // 点击外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
    
    // 隐藏原安装提示
    const installPromptEl = document.getElementById('install-prompt');
    if (installPromptEl) {
        installPromptEl.classList.remove('show');
    }
}

console.log('🤖 AI与Web3导航应用已加载完成'); 