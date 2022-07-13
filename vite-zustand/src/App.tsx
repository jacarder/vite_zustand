import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useCartStore } from './CartState'
import { ICartItem } from './models/cart.model';
import AddItemButton from './AddItemButton';
import { Box, Container, Grid, GridItem, ListItem, Stack, Tag, UnorderedList } from '@chakra-ui/react';
import RemoveItemButton from './RemoveItemButton';

function App() {
  const { cart } = useCartStore();
  return (
    <Grid gap={3}>
      <GridItem>
        {
          cart.map(x =>
            <Grid templateRows={'repeat(2, 1fr)'} gridTemplateRows={'auto'}>
              <GridItem colSpan={2} alignSelf={'flex-end'} justifySelf={'flex-start'}>
                <Tag>{x.label}</Tag>
              </GridItem>
              <GridItem colSpan={1}>
                <Box key={x.id} maxW='sm' borderWidth='1px' borderRadius='lg' margin={5} overflow='hidden'>
                  <UnorderedList textAlign={'left'} listStylePos={'inside'} key={x.id}>
                    <ListItem>Item Id: {x.id}</ListItem>
                    <ListItem>Description: {x.description}</ListItem>
                    <ListItem>Count: {x.count}</ListItem>
                  </UnorderedList>
                </Box>
              </GridItem>
              <GridItem colSpan={1} alignSelf={'center'}>
                <RemoveItemButton itemId={x.id} label={x.label}></RemoveItemButton>
              </GridItem>
            </Grid>
          )
        }
      </GridItem >
      {/* Just testing lol */}
      < GridItem >
        <Stack spacing={4} direction='row' justifyContent={'center'} alignItems={'center'}>
          <AddItemButton id={1} description='Berrylicious' label='Berry'></AddItemButton>
          <AddItemButton id={2} description='Nutty nut' label='Nut'></AddItemButton>
        </Stack>
      </GridItem >
    </Grid >
  )
}

export default App
