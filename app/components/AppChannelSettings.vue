<template>
  <ScrollView>
    <StackLayout>
      <GridLayout columns="auto, *" class="nt-drawer__list-item" @tap="$emit('notifications')">
        <Label col="0" text.decode="&#xf0f3;" class="nt-icon fas" />
        <Label col="1" text="Notificacions" class="p-r-10" />
      </GridLayout>

      <StackLayout class="hr" />

      <GridLayout columns="auto, *" class="nt-drawer__list-item" @tap="$emit('sentMessage')">
        <Label col="0" text.decode="&#xf1d8;" class="nt-icon fas" />
        <Label col="1" text="Enviar Missatges" class="p-r-10" />
      </GridLayout>


    </StackLayout>
  </ScrollView>
</template>

<script>

export default {
  name: 'AppChannelSettings'
}
</script>
