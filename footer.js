
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => alert(`Copied: ${text}`))
      .catch(err => alert('Failed to copy: ' + err));
  }

