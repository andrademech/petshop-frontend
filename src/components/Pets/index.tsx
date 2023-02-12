// Components
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Styles
import {
  PetsContainer,
  PetsTable,
  EditButton,
  TrashButton,
  StyledTable,
} from './styles'
import { Trash } from 'phosphor-react'

interface Pet {
  id: number
  name: string
  breed: string
  age: number
  owner?: string
}

const apiUrl: any = process.env.REACT_APP_API_URL

export const Pets = () => {
  const [pets, setPets] = useState<Pet[]>([])
  const [newPet, setNewPet] = useState<Pet>({
    id: 0,
    name: '',
    breed: '',
    age: 0,
    owner: '',
  })
  const [isEditing, setIsEditing] = useState(false)
  const [selectedPet, setSelectedPet] = useState<Pet>({
    id: 0,
    name: '',
    breed: '',
    age: 0,
    owner: '',
  })

  async function loadPets() {
    const response = await axios.get(apiUrl + '/pets')
    const petsData = await response.data
    setPets(petsData.data)
  }

  async function handleCreatePet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newPet.name) {
      alert('O nome do pet é obrigatório')
      return
    }

    if (isEditing) {
      await axios.put(`${apiUrl} + ' /pets/${selectedPet.id}`, newPet)
      setIsEditing(false)
    } else {
      const response = await axios.post('http://localhost:3000/pets', newPet)
      const petsData = await response.data
      setPets([...pets, petsData.data])
    }

    setNewPet({ id: 0, name: '', breed: '', age: 0, owner: '' } as Pet)
  }

  async function handleDeletePet(id: number) {
    await axios.delete(`${apiUrl} + /pets/${id}`)
    const filteredPets = pets.filter((pet) => pet.id !== id)
    setPets(filteredPets)
  }

  async function handleUpdatePet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newPet.name) {
      alert('O nome do pet é obrigatório')
      return
    }

    await axios.put(`${apiUrl} + /pets/${selectedPet.id}`, newPet)
    setPets(
      pets.map((pet) => {
        if (pet.id === selectedPet.id) {
          return newPet
        }
        return pet
      }),
    )
    setIsEditing(false)
    setNewPet({ id: 0, name: '', breed: '', age: 0, owner: '' } as Pet)
  }

  const handleEditPet = (pet: Pet) => {
    setIsEditing(true)
    setSelectedPet(pet)
    setNewPet({ ...pet })
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setNewPet({ id: 0, name: '', breed: '', age: 0, owner: '' } as Pet)
    setSelectedPet({ id: 0, name: '', breed: '', age: 0, owner: '' } as Pet)
  }

  useEffect(() => {
    loadPets()
  }, [newPet])

  return (
    <PetsContainer>
      <StyledTable>
        <PetsTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Raça</th>
              <th>Idade</th>
              <th>Dono</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          {pets && pets.length > 0 ? (
            <tbody>
              {pets.map((pet) => {
                return (
                  <tr key={pet.id}>
                    <td width="50%">{pet.name}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.age}</td>
                    <td>{pet.owner}</td>
                    <td>
                      <EditButton onClick={() => handleEditPet(pet)}>
                        Editar
                      </EditButton>
                    </td>
                    <td>
                      <TrashButton onClick={() => handleDeletePet(pet.id)}>
                        <Trash size={24} />
                      </TrashButton>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={3}>Não há pets para exibir</td>
              </tr>
            </tbody>
          )}
        </PetsTable>
      </StyledTable>
      <div>
        <h2>{isEditing ? 'Editar Pet' : 'Cadastrar Pet'}</h2>
      </div>
      <form onSubmit={isEditing ? handleUpdatePet : handleCreatePet}>
        <input
          type="text"
          placeholder="Nome"
          value={newPet.name}
          onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Raça"
          value={newPet.breed}
          onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
        />
        <input
          type="number"
          placeholder="Idade"
          value={newPet.age}
          onChange={(e) =>
            setNewPet({ ...newPet, age: Number(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="Dono"
          value={newPet.owner}
          onChange={(e) => setNewPet({ ...newPet, owner: e.target.value })}
        />
        {isEditing ? (
          <>
            <button type="submit">
              {isEditing ? 'Atualizar' : 'Cadastrar'}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false)
                handleCancelEdit()
              }}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button type="submit">Cadastrar</button>
        )}
      </form>
    </PetsContainer>
  )
}
