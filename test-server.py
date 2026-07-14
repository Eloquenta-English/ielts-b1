import http.server, socketserver, os
os.chdir(r'C:\Users\irieb\Documents\William's Projects\workspace\esl-materials')
handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(('', 8090), handler) as httpd:
    print('Serving on port 8090')
    httpd.serve_forever()
