import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem; // 1 rem = tamanho font size root = 16px ; 160px embaixo
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem; // 4px no desktop;
    height: 3rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9)
    }
  }
`