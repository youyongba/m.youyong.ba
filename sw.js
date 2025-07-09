// Service Worker 版本
const CACHE_VERSION = 'ai-web3-nav-v1.0.0';
const CACHE_NAME = `ai-web3-nav-${CACHE_VERSION}`;

// 需要缓存的资源
const CACHE_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './icons/icon-72x72.png',
    './icons/icon-96x96.png',
    './icons/icon-128x128.png',
    './icons/icon-144x144.png',
    './icons/icon-152x152.png',
    './icons/icon-192x192.png',
    './icons/icon-384x384.png',
    './icons/icon-512x512.png'
];

// 安装事件 - 预缓存核心资源
self.addEventListener('install', event => {
    console.log('Service Worker 安装中...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('缓存核心资源...');
                return cache.addAll(CACHE_ASSETS);
            })
            .then(() => {
                console.log('核心资源缓存完成');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('缓存失败:', error);
            })
    );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
    console.log('Service Worker 激活中...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('删除旧缓存:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker 激活完成');
            return self.clients.claim();
        })
    );
});

// 拦截网络请求
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // 只处理 HTTP/HTTPS 请求
    if (!request.url.startsWith('http')) {
        return;
    }
    
    // 对于导航请求，使用网络优先策略
    if (request.mode === 'navigate') {
        event.respondWith(
            networkFirst(request)
        );
        return;
    }
    
    // 对于静态资源，使用缓存优先策略
    if (isStaticAsset(request)) {
        event.respondWith(
            cacheFirst(request)
        );
        return;
    }
    
    // 对于API请求，使用网络优先策略
    if (isApiRequest(request)) {
        event.respondWith(
            networkFirst(request)
        );
        return;
    }
    
    // 默认使用网络优先策略
    event.respondWith(
        networkFirst(request)
    );
});

// 缓存优先策略
async function cacheFirst(request) {
    try {
        // 首先尝试从缓存获取
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // 缓存中没有，从网络获取
        const networkResponse = await fetch(request);
        
        // 如果网络请求成功，更新缓存
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.error('缓存优先策略失败:', error);
        
        // 如果网络也失败，尝试返回缓存的内容
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // 返回离线页面
        return createOfflineResponse();
    }
}

// 网络优先策略
async function networkFirst(request) {
    try {
        // 首先尝试网络请求
        const networkResponse = await fetch(request);
        
        // 如果网络请求成功，更新缓存
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.error('网络请求失败:', error);
        
        // 网络失败，尝试从缓存获取
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // 如果是导航请求，返回缓存的主页
        if (request.mode === 'navigate') {
            const cachedIndex = await caches.match('./index.html');
            if (cachedIndex) {
                return cachedIndex;
            }
        }
        
        // 返回离线页面
        return createOfflineResponse();
    }
}

// 判断是否为静态资源
function isStaticAsset(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // 静态资源文件扩展名
    const staticExtensions = [
        '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', 
        '.woff', '.woff2', '.ttf', '.eot', '.json'
    ];
    
    return staticExtensions.some(ext => pathname.endsWith(ext));
}

// 判断是否为API请求
function isApiRequest(request) {
    const url = new URL(request.url);
    return url.pathname.startsWith('/api/') || 
           url.hostname !== self.location.hostname;
}

// 创建离线响应
function createOfflineResponse() {
    const offlineHtml = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>离线模式 - AI与Web3导航</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    margin: 0;
                    padding: 0;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .offline-container {
                    text-align: center;
                    padding: 2rem;
                }
                .offline-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                }
                .offline-title {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }
                .offline-message {
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }
                .offline-button {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: 2px solid white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }
                .offline-button:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            </style>
        </head>
        <body>
            <div class="offline-container">
                <div class="offline-icon">📱</div>
                <h1 class="offline-title">离线模式</h1>
                <p class="offline-message">
                    您当前处于离线状态，但您仍可以浏览已缓存的内容。<br>
                    请检查网络连接后重试。
                </p>
                <a href="./" class="offline-button">返回主页</a>
            </div>
        </body>
        </html>
    `;
    
    return new Response(offlineHtml, {
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-store'
        }
    });
}

// 消息处理 - 与主线程通信
self.addEventListener('message', event => {
    const { type, data } = event.data;
    
    switch (type) {
        case 'SKIP_WAITING':
            self.skipWaiting();
            break;
            
        case 'GET_CACHE_INFO':
            getCacheInfo().then(info => {
                event.ports[0].postMessage({
                    type: 'CACHE_INFO',
                    data: info
                });
            });
            break;
            
        case 'CLEAR_CACHE':
            clearCache().then(success => {
                event.ports[0].postMessage({
                    type: 'CACHE_CLEARED',
                    data: { success }
                });
            });
            break;
            
        default:
            console.log('未知消息类型:', type);
    }
});

// 获取缓存信息
async function getCacheInfo() {
    try {
        const cache = await caches.open(CACHE_NAME);
        const keys = await cache.keys();
        const cacheSize = keys.length;
        
        return {
            version: CACHE_VERSION,
            size: cacheSize,
            assets: keys.map(key => key.url)
        };
    } catch (error) {
        console.error('获取缓存信息失败:', error);
        return null;
    }
}

// 清理缓存
async function clearCache() {
    try {
        const deleted = await caches.delete(CACHE_NAME);
        console.log('缓存清理结果:', deleted);
        return deleted;
    } catch (error) {
        console.error('清理缓存失败:', error);
        return false;
    }
}

// 后台同步（如果支持）
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

// 执行后台同步
async function doBackgroundSync() {
    try {
        // 这里可以执行后台同步任务
        // 例如：同步用户数据、发送统计信息等
        console.log('执行后台同步...');
        
        // 模拟同步过程
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('后台同步完成');
    } catch (error) {
        console.error('后台同步失败:', error);
    }
}

// 通知处理（如果支持）
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    // 打开应用
    event.waitUntil(
        clients.openWindow('./')
    );
});

// 推送消息处理（如果支持）
self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json();
        
        const title = data.title || 'AI与Web3导航';
        const options = {
            body: data.body || '您有新的更新内容',
            icon: './icons/icon-192x192.png',
            badge: './icons/icon-96x96.png',
            tag: 'ai-web3-nav',
            renotify: true,
            requireInteraction: false
        };
        
        event.waitUntil(
            self.registration.showNotification(title, options)
        );
    }
});

console.log('Service Worker 已加载 🔧'); 