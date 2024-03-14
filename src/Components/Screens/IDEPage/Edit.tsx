import { FC } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useRef } from 'react'

interface EditProps {
  header: string
  subHeader: string
  mainInfo: string
  addInfo?: string
  img: string
  alt: string
}

const Edit: FC<EditProps> = ({
  header,
  subHeader,
  mainInfo,
  addInfo,
  img,
  alt
}) => {
  const pRef = useRef<HTMLPreElement>(null)
  const copyToClipboard = () => {
    if (pRef.current) {
      const range = document.createRange()
      range.selectNode(pRef.current)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
      document.execCommand('copy')
      window.getSelection()?.removeAllRanges()
      alert(`${subHeader} copied!`)
    }
  }
  return (
    <>
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
        <h2
          className="header_text"
          dangerouslySetInnerHTML={{ __html: header }}
        ></h2>
        <img
          src={img}
          alt={alt}
          style={{
            width: '80px'
          }}
        />
      </div>
      <div className="settings">
        <pre
          style={{
            fontSize: '18px',
            marginBottom: '20px'
          }}
        >
          {subHeader}
        </pre>
        <pre
          style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}
          className="settings_text"
          ref={pRef}
          dangerouslySetInnerHTML={{ __html: mainInfo }}
        ></pre>
        <button onClick={copyToClipboard} className="copy_button">
          <ContentCopyIcon fontSize="small" />
          Copy
        </button>
        {addInfo ? <b>{addInfo}</b> : ''}
      </div>
    </>
  )
}

export default Edit
