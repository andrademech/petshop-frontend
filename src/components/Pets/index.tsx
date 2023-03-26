// Components
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Styles
import {
  PetsContainer,
  PetsTable,
  EditButton,
  TrashButton,
  StyledTable,
  LayoutButton,
  RegisterButton,
} from './styles'
import { Trash } from 'phosphor-react'

interface Pet {
  id: number
  name: string
  breed: string
  age: number
  owner?: string
}

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

  async function getPetsData() {
    const petsData = localStorage.getItem('pets')
    return petsData ? JSON.parse(petsData) : []
  }

  async function loadPets() {
    const petsData = await getPetsData()
    setPets(await petsData)
  }

  async function handleCreatePet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newPet.name) {
      alert('O nome do pet é obrigatório')
      return
    }

    const petWithId = { ...newPet, id: uuidv4() } // generate a random id for the new pet

    if (isEditing) {
      // update existing pet
      const updatedPets = pets.map((pet) => {
        if (pet.id === selectedPet.id) {
          return petWithId
        }
        return pet
      })
      localStorage.setItem('pets', JSON.stringify(updatedPets))
      setIsEditing(false)
    } else {
      // add new pet
      const newPets = [...pets, petWithId]
      localStorage.setItem('pets', JSON.stringify(newPets))
    }

    setPets(await getPetsData())
    setNewPet({ id: 0, name: '', breed: '', age: 0, owner: '' } as Pet)
  }

  async function handleDeletePet(id: number) {
    const filteredPets = pets.filter((pet) => pet.id !== id)
    localStorage.setItem('pets', JSON.stringify(filteredPets))
    setPets(await getPetsData())
  }

  async function handleUpdatePet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newPet.name) {
      alert('O nome do pet é obrigatório')
      return
    }

    const updatedPets = pets.map((pet) => {
      if (pet.id === selectedPet.id) {
        return newPet
      }
      return pet
    })
    localStorage.setItem('pets', JSON.stringify(updatedPets))

    setPets(await getPetsData())

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <td>{pet.name}</td>
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
                <td colSpan={7}>
                  <p>Não há pets para exibir</p>
                </td>
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
          <LayoutButton>
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
          </LayoutButton>
        ) : (
          <RegisterButton>
            <button type="submit">Cadastrar</button>
          </RegisterButton>
        )}
      </form>
    </PetsContainer>
  )
}
