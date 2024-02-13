import Header from "../Homepage/Header/Header";
import { FC } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useRef } from 'react'

const Page: FC = () => {
    const pRef = useRef<HTMLPreElement>(null)
    const copyToClipboard = () => {
        if (pRef.current) {
          const range = document.createRange()
          range.selectNode(pRef.current)
          window.getSelection()?.removeAllRanges()
          window.getSelection()?.addRange(range)
          document.execCommand('copy')
          window.getSelection()?.removeAllRanges()
          alert('settings.json copied!')
        }
      }
    return (
        <>
    <Header />
      <div className="main-post">
        <div className="wrapper">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '100px',
              marginTop: '50px',
              marginBottom: '50px'
            }}
          >
            <h2>Мои настройки VSCode</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              alt="vscode_ico"
              style={{
                width: '80px'
              }}
            />
          </div>
          <div className="settings">
            <pre
              style={{
                fontSize: '18px',
                marginBottom: '40px'
              }}
            >
              settings.json
            </pre>
            <pre ref={pRef}>
              "explorer.confirmDragAndDrop": false,
              <br />
              "explorer.confirmDelete": false,
              <br />
              "security.workspace.trust.untrustedFiles": "open",
              <br />
              "javascript.updateImportsOnFileMove.enabled": "always",
              <br />
              "workbench.sideBar.location": "right",
              <br />
              "workbench.iconTheme": "catppuccin-perfect-sequoia",
              <br />
              "editor.minimap.enabled": false,
              <br />
              "workbench.statusBar.visible": false,
              <br />
              "editor.stickyScroll.enabled": true,
              <br />
              "workbench.settings.applyToAllProfiles": [ "editor.fontFamily" ],
              <br />
              "files.autoSave": "afterDelay",
              <br />
              "editor.fontFamily": "JetBrainsMono Nerd Font",
              <br />
              "editor.cursorSmoothCaretAnimation": "on",
              <br />
              "editor.cursorBlinking": "expand",
              <br />
              "editor.smoothScrolling": true,
              <br />
              "editor.cursorStyle": "line-thin",
              <br />
              "editor.fontLigatures": true,
              <br />
              "editor.glyphMargin": false,
              <br />
              "git.autofetch": true,
              <br />
              "git.enableSmartCommit": true,
              <br />
              "terminal.integrated.enableMultiLinePasteWarning": false,
              <br />
              "tabnine.experimentalAutoImports": true,
              <br />
              "workbench.colorTheme": "Catppuccin Mocha Bordered",
              <br />
              "workbench.editor.enablePreview": false,
              <br />
              "window.density.editorTabHeight": "compact",
              <br />
              "window.commandCenter": false,
              <br />
              "workbench.activityBar.location": "top",
              <br />
              "explorer.compactFolders": false,
              <br />
              "workbench.productIconTheme": "fluent-icons",
              <br />
              "terminal.integrated.fontSize": 12,
              <br />
              "terminal.integrated.tabs.enableAnimation": false,
              <br />
              "terminal.integrated.drawBoldTextInBrightColors": true,
              <br />
              "terminal.integrated.gpuAcceleration": "off",
              <br />
              "editor.scrollbar.vertical": "hidden",
              <br />
              "editor.scrollbar.horizontal": "hidden",
              <br />
              "window.titleBarStyle": "custom",
              <br />
              "workbench.layoutControl.enabled": false,
              <br />
              "livePreview.notifyOnOpenLooseFile": false,
              <br />
              "redhat.telemetry.enabled": true,
              <br />
              "git.openRepositoryInParentFolders": "never",
              <br />
              "hediet.vscode-drawio.resizeImages": null,
              <br />
              "vsicons.dontShowNewVersionMessage": true,
              <br />
              "window.zoomLevel": 1,
              <br />
            </pre>
            <button onClick={copyToClipboard} className="copy_button">
              <ContentCopyIcon fontSize="small" />
              Copy
            </button>
            <b>Но незабудь скачать шрифты и иконки!)</b>
          </div>
        </div>
      </div>
      </>
    );
}

export default Page;