const tema = {
  cores: {
    principal: '#a7727d',
    principalEscura: '#8a5a66',
    secundaria: '#f9f5e7',
    fundo: '#fffdf6',
    texto: '#3d2c31',
    branco: '#ffffff',
    niveis: {
      junior: '#6a8d73',
      pleno: '#b08954',
      senior: '#8a5a66'
    } as Record<string, string>
  },
  fontes: {
    corpo: 'Lato, sans-serif',
    destaque: 'Gloock, serif'
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px'
  },
  transicao: 'all ease 0.3s'
}

export default tema
