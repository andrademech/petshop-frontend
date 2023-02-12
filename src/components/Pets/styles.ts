import styled from 'styled-components'

export const PetsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1120px;
  margin: 1rem auto 0;
  padding: 0 1.5rem;

  form {
    margin-top: 2rem;
    background: ${(props) => props.theme['gray-700']};
    padding: 1rem 2rem;
    border-radius: 8px;
    justify-content: center;
    align-items: center;

    display: flex;
    flex-direction: row;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-800']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    input[type='number'] {
      width: 80px;
    }

    button[type='submit'] {
      height: 32px;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme['gray-700']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      padding: 0 0.5rem;

      &:hover {
        filter: brightness(1.2);
        transition: background-color 0.2s;
      }
    }

    button[type='button'] {
      height: 32px;
      border: 0;
      background: ${(props) => props.theme['yellow-500']};
      color: ${(props) => props.theme['gray-700']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      padding: 0 0.5rem;

      &:hover {
        filter: brightness(1.2);
        transition: background-color 0.2s;
      }
    }
  }
`

export const StyledTable = styled.div`
  overflow-y: scroll;
  width: 100%;
  max-height: 350px;
  margin-bottom: 1.5rem;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent; /* mudando a cor de fundo */
  }
`

export const PetsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  min-width: 300px;

  thead {
    padding: 1.25rem 2rem;
    position: sticky;
    top: 0;
    background-color: ${(props) => props.theme['gray-600']};
    border: 0;
    height: 32px;
  }

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const EditButton = styled.button`
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['gray-700']};
  padding: 0 0.5rem;
  margin-left: 0.5rem;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`

export const TrashButton = styled.button`
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['red-500']};
  /* padding: 0 0.5rem; */
  margin-left: 0.5rem;
  transition: filter 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.2);
  }
`
