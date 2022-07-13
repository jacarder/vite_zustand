import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useCartStore } from './CartState'
import { ICartItem } from './models/cart.model';
import AddItemButton from './AddItemButton';
import { Box, Container, Grid, GridItem, ListItem, Stack, UnorderedList } from '@chakra-ui/react';

function App() {
  const { cart } = useCartStore();
  return (
    <Grid templateRows={'repeat(2, 1fr)'}>
      <GridItem>
        {
          cart.map(x => (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' margin={5} overflow='hidden'>
              <UnorderedList textAlign={'left'} listStylePos={'inside'} key={x.id}>
                <ListItem>Item Id: {x.id}</ListItem>
                <ListItem>Description: {x.description}</ListItem>
                <ListItem>Count: {x.count}</ListItem>
              </UnorderedList>
            </Box>
          ))
        }
      </GridItem>
      {/* Just testing lol */}
      <GridItem>
        <Stack spacing={4} direction='row' justifyContent={'center'} alignItems={'center'}>
          <AddItemButton id={1} description='Berrylicious' label='Berry'></AddItemButton>
          <AddItemButton id={2} description='Nutty nut' label='Nut'></AddItemButton>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default App
