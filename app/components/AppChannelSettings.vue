<template>
  <ScrollView>
    <StackLayout>
      <GridLayout columns="auto, *" class="nt-drawer__list-item" @tap="$emit('notifications')">
        <Label col="0" text.decode="&#xf0f3;" class="nt-icon fas" />
        <Label col="1" text="Rebre notificacions" class="p-r-10" />
      </GridLayout>

      <StackLayout class="hr" />

      <GridLayout columns="auto, *" class="nt-drawer__list-item" @tap="$emit('tags')">
        <Label col="0" text.decode="&#xf02b;" class="nt-icon fas" />
        <Label col="1" text="Etiquetes" class="p-r-10" />
      </GridLayout>

      <GridLayout columns="auto, *" class="nt-drawer__list-item" @tap="$emit('sentMessage')">
        <Label col="0" text.decode="&#xf1d8;" class="nt-icon fas" />
        <Label col="1" text="Enviar Missatges" class="p-r-10" />
      </GridLayout>

      <GridLayout columns="auto, *" class="nt-drawer__list-item" @tap="$emit('removedMessages')">
        <Label col="0" text.decode="&#xf04a;" class="nt-icon fas" />
        <Label col="1" text="Recuperar Missatges Eliminats" class="p-r-10" />
      </GridLayout>

    </StackLayout>
  </ScrollView>
</template>

<script>

export default {
  name: 'AppChannelSettings'
}
</script>
