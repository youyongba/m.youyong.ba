#!/usr/bin/env python3
"""
AI与Web3导航 PWA 应用本地服务器
支持 PWA 特性，包括 Service Worker 和 HTTPS
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# 服务器配置
PORT = 8000
HOST = 'localhost'

class PWAHandler(http.server.SimpleHTTPRequestHandler):
    """自定义处理器，支持 PWA 特性"""
    
    def end_headers(self):
        # 添加 PWA 所需的 HTTP 头
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        # 安全头
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        
        # Service Worker 需要的头
        if self.path.endswith('.js'):
            self.send_header('Service-Worker-Allowed', '/')
        
        super().end_headers()
    
    def do_GET(self):
        """处理 GET 请求"""
        # 处理根路径
        if self.path == '/':
            self.path = '/index.html'
        
        # 处理 manifest.json
        if self.path.endswith('.json'):
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            file_path = Path(self.path.lstrip('/'))
            if file_path.exists():
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            return
        
        # 处理 Service Worker
        if self.path.endswith('sw.js'):
            self.send_response(200)
            self.send_header('Content-type', 'application/javascript')
            self.end_headers()
            
            with open('sw.js', 'rb') as f:
                self.wfile.write(f.read())
            return
        
        # 其他请求使用默认处理
        super().do_GET()

def main():
    """启动服务器"""
    print(f"🚀 AI与Web3导航 PWA 应用服务器")
    print(f"📍 地址: http://{HOST}:{PORT}")
    print(f"📁 目录: {os.getcwd()}")
    print(f"🌐 浏览器访问: http://{HOST}:{PORT}")
    print(f"📱 手机访问: 使用本机 IP 地址")
    print("-" * 50)
    
    # 检查必要文件
    required_files = ['index.html', 'styles.css', 'app.js', 'sw.js', 'manifest.json']
    missing_files = []
    
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print(f"❌ 缺少文件: {', '.join(missing_files)}")
        return
    
    print("✅ 所有必要文件都存在")
    
    # 启动服务器
    try:
        with socketserver.TCPServer((HOST, PORT), PWAHandler) as httpd:
            print(f"🎉 服务器运行在 http://{HOST}:{PORT}")
            print("按 Ctrl+C 停止服务器")
            print("\n💡 PWA 功能提示:")
            print("- 首次访问会显示启动画面")
            print("- 应用会自动缓存资源以支持离线访问")
            print("- 可以通过浏览器安装到桌面")
            print("- 支持响应式设计，适配各种设备")
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 服务器已停止")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ 端口 {PORT} 已被占用，请尝试其他端口")
            print(f"💡 可以使用: python server.py --port 8080")
        else:
            print(f"❌ 启动服务器失败: {e}")

if __name__ == '__main__':
    # 处理命令行参数
    if len(sys.argv) > 1:
        if sys.argv[1] == '--port' and len(sys.argv) > 2:
            try:
                PORT = int(sys.argv[2])
            except ValueError:
                print("❌ 无效的端口号")
                sys.exit(1)
        elif sys.argv[1] == '--help':
            print("用法: python server.py [--port PORT] [--help]")
            print("选项:")
            print("  --port PORT  指定端口号 (默认: 8000)")
            print("  --help       显示帮助信息")
            sys.exit(0)
    
    main() 