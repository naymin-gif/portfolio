"""Preview only: serve public website files, never source documents or dotfiles."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent
PUBLIC = {"index.html", "comatch.html", "resume.html", "styles.css", "resume.css", "script.js"}

class PortfolioHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = unquote(urlsplit(self.path).path).lstrip("/") or "index.html"
        resolved = (ROOT / path).resolve()
        if not resolved.is_relative_to(ROOT) or not (path in PUBLIC or (path.startswith("assets/") and resolved.is_file())):
            self.send_error(404)
            return
        super().do_GET()

    def do_HEAD(self):
        self.do_GET()

if __name__ == "__main__":
    print("Portfolio preview: http://127.0.0.1:4173", flush=True)
    ThreadingHTTPServer(("127.0.0.1", 4173), PortfolioHandler).serve_forever()
