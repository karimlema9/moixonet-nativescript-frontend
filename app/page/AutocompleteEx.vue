<!--&lt;!&ndash;&lt;!&ndash;suppress HtmlUnknownTag, XmlUnboundNsPrefix &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <Page>&ndash;&gt;-->
<!--&lt;!&ndash;    <ActionBar :title="title">&ndash;&gt;-->
<!--&lt;!&ndash;      &lt;!&ndash;&ndash;&gt;-->
<!--&lt;!&ndash;            Use the NavigationButton as a side-drawer button in Android&ndash;&gt;-->
<!--&lt;!&ndash;            because ActionItems are shown on the right side of the ActionBar&ndash;&gt;-->
<!--&lt;!&ndash;            &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="showDrawer" />&ndash;&gt;-->
<!--&lt;!&ndash;      &lt;!&ndash;&ndash;&gt;-->
<!--&lt;!&ndash;            Use the ActionItem for IOS with position set to left. Using the&ndash;&gt;-->
<!--&lt;!&ndash;            NavigationButton as a side-drawer button in iOS is not possible,&ndash;&gt;-->
<!--&lt;!&ndash;            because its function is to always navigate back in the application.&ndash;&gt;-->
<!--&lt;!&ndash;            &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;      <ActionItem&ndash;&gt;-->
<!--&lt;!&ndash;        icon="res://menu"&ndash;&gt;-->
<!--&lt;!&ndash;        android:visibility="collapsed"&ndash;&gt;-->
<!--&lt;!&ndash;        ios.position="left"&ndash;&gt;-->
<!--&lt;!&ndash;        @tap="showDrawer"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--&lt;!&ndash;      <Label class="action-bar-title" text="Browse" />&ndash;&gt;-->
<!--&lt;!&ndash;    </ActionBar>&ndash;&gt;-->
<!--&lt;!&ndash;    <StackLayout ios:background-color="#CDCECE" padding="5">&ndash;&gt;-->
<!--&lt;!&ndash;      <Label text="Select country" />&ndash;&gt;-->
<!--&lt;!&ndash;      <RadAutoCompleteTextView&ndash;&gt;-->
<!--&lt;!&ndash;        ref="autocomplete"&ndash;&gt;-->
<!--&lt;!&ndash;        :completion-mode="completionMode"&ndash;&gt;-->
<!--&lt;!&ndash;        :suggest-mode="suggestMode"&ndash;&gt;-->
<!--&lt;!&ndash;        :display-mode="displayMode"&ndash;&gt;-->
<!--&lt;!&ndash;        :items="dataItems"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--&lt;!&ndash;      <Label text="SUGGEST MODES" margin-top="5" />&ndash;&gt;-->
<!--&lt;!&ndash;      <StackLayout orientation="horizontal">&ndash;&gt;-->
<!--&lt;!&ndash;        <Button margin="5" text="Suggest" @tap="onSuggestSelected" />&ndash;&gt;-->
<!--&lt;!&ndash;        <Button margin="5" text="Append" @tap="onAppendSelected" />&ndash;&gt;-->
<!--&lt;!&ndash;        <Button margin="5" text="Suggest-Append" @tap="onSuggestAppendSelected" />&ndash;&gt;-->
<!--&lt;!&ndash;      </StackLayout>&ndash;&gt;-->
<!--&lt;!&ndash;      <Label text="COMPLETION MODES" />&ndash;&gt;-->
<!--&lt;!&ndash;      <StackLayout orientation="horizontal">&ndash;&gt;-->
<!--&lt;!&ndash;        <Button margin="5" text="StartsWith" @tap="onStartsWithSelected" />&ndash;&gt;-->
<!--&lt;!&ndash;        <Button margin="5" text="Contains" @tap="onContainsSelected" />&ndash;&gt;-->
<!--&lt;!&ndash;      </StackLayout>&ndash;&gt;-->
<!--&lt;!&ndash;      <Label text="DISPLAY MODES" />&ndash;&gt;-->
<!--&lt;!&ndash;      <StackLayout orientation="horizontal">&ndash;&gt;-->
<!--&lt;!&ndash;        <Button margin="5" text="Plain" @tap="onPlainSelected" />&ndash;&gt;-->
<!--&lt;!&ndash;        <Button margin="5" text="Tokens" @tap="onTokensSelected" />&ndash;&gt;-->
<!--&lt;!&ndash;      </StackLayout>&ndash;&gt;-->
<!--&lt;!&ndash;    </StackLayout>&ndash;&gt;-->
<!--&lt;!&ndash;  </Page>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import { AutoCompleteCompletionMode, AutoCompleteDisplayMode, AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete'&ndash;&gt;-->
<!--&lt;!&ndash;import { ObservableArray } from 'tns-core-modules/data/observable-array'&ndash;&gt;-->
<!--&lt;!&ndash;import { getCountry, getCountriesCount } from '../data/countries'&ndash;&gt;-->
<!--&lt;!&ndash;import * as utils from '~/shared/utils'&ndash;&gt;-->

<!--&lt;!&ndash;const description = 'Exemple autocomplete'&ndash;&gt;-->

<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name: 'AutocompleteEx',&ndash;&gt;-->
<!--&lt;!&ndash;  description,&ndash;&gt;-->
<!--&lt;!&ndash;  data () {&ndash;&gt;-->
<!--&lt;!&ndash;    const dataItems = new ObservableArray()&ndash;&gt;-->

<!--&lt;!&ndash;    for (let i = 0; i < getCountriesCount(); i++) {&ndash;&gt;-->
<!--&lt;!&ndash;      dataItems.push(getCountry(i))&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      title: description,&ndash;&gt;-->
<!--&lt;!&ndash;      dataItems,&ndash;&gt;-->
<!--&lt;!&ndash;      displayMode: AutoCompleteDisplayMode.Tokens,&ndash;&gt;-->
<!--&lt;!&ndash;      suggestMode: AutoCompleteSuggestMode.Suggest,&ndash;&gt;-->
<!--&lt;!&ndash;      completionMode: AutoCompleteCompletionMode.Contains&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    showDrawer () {&ndash;&gt;-->
<!--&lt;!&ndash;      utils.showDrawer()&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    // onNavigationButtonTap () {&ndash;&gt;-->
<!--&lt;!&ndash;    //   Frame.topmost().goBack()&ndash;&gt;-->
<!--&lt;!&ndash;    // },&ndash;&gt;-->
<!--&lt;!&ndash;    onSuggestSelected (args) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log('onSuggestSelected!')&ndash;&gt;-->
<!--&lt;!&ndash;      this.suggestMode = AutoCompleteSuggestMode.Suggest&ndash;&gt;-->
<!--&lt;!&ndash;      this.$refs.autocomplete.resetAutoComplete()&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    onAppendSelected (args) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log('onAppendSelected!')&ndash;&gt;-->
<!--&lt;!&ndash;      this.suggestMode = AutoCompleteSuggestMode.Append&ndash;&gt;-->
<!--&lt;!&ndash;      this.completionMode = AutoCompleteCompletionMode.StartsWith&ndash;&gt;-->
<!--&lt;!&ndash;      this.$refs.autocomplete.resetAutoComplete()&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    onSuggestAppendSelected (args) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log('onSuggestAppendSelected')&ndash;&gt;-->
<!--&lt;!&ndash;      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend&ndash;&gt;-->
<!--&lt;!&ndash;      this.completionMode = AutoCompleteCompletionMode.StartsWith&ndash;&gt;-->
<!--&lt;!&ndash;      this.$refs.autocomplete.resetAutoComplete()&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    onStartsWithSelected (args) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log('onStartsWithSelected')&ndash;&gt;-->
<!--&lt;!&ndash;      this.completionMode = AutoCompleteCompletionMode.StartsWith&ndash;&gt;-->
<!--&lt;!&ndash;      this.$refs.autocomplete.resetAutoComplete()&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    onContainsSelected (args) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log('onContainsSelected')&ndash;&gt;-->
<!--&lt;!&ndash;      this.completionMode = AutoCompleteCompletionMode.Contains&ndash;&gt;-->
<!--&lt;!&ndash;      this.suggestMode = AutoCompleteSuggestMode.Suggest&ndash;&gt;-->
<!--&lt;!&ndash;      this.$refs.autocomplete.resetAutoComplete()&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    onPlainSelected (args) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log('onPlainSelected')&ndash;&gt;-->
<!--&lt;!&ndash;      this.displayMode = AutoCompleteDisplayMode.Plain&ndash;&gt;-->
<!--&lt;!&ndash;      this.$refs.autocomplete.resetAutoComplete()&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    onTokensSelected (args) {&ndash;&gt;-->
<!--&lt;!&ndash;      console.log('onTokensSelected')&ndash;&gt;-->
<!--&lt;!&ndash;      this.displayMode = AutoCompleteDisplayMode.Tokens&ndash;&gt;-->
<!--&lt;!&ndash;      this.$refs.autocomplete.resetAutoComplete()&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;suppress HtmlUnknownTag, XmlUnboundNsPrefix, HtmlUnknownAttribute &ndash;&gt;-->
<!--<template>-->
<!--  <PageLayout title="Exemple autocomplete" name="AutocompleteEx">-->
<!--    <StackLayout ios:background-color="#CDCECE" padding="5">-->
<!--      <Label text="Select country" />-->
<!--      <RadAutoCompleteTextView-->
<!--        ref="autocomplete"-->
<!--        :completion-mode="completionMode"-->
<!--        :suggest-mode="suggestMode"-->
<!--        :display-mode="displayMode"-->
<!--        :items="dataItems"-->
<!--      />-->
<!--      <Label text="SUGGEST MODES" margin-top="5" />-->
<!--      <StackLayout orientation="horizontal">-->
<!--        <Button margin="5" text="Suggest" @tap="onSuggestSelected" />-->
<!--        <Button margin="5" text="Append" @tap="onAppendSelected" />-->
<!--        <Button margin="5" text="Suggest-Append" @tap="onSuggestAppendSelected" />-->
<!--      </StackLayout>-->
<!--      <Label text="COMPLETION MODES" />-->
<!--      <StackLayout orientation="horizontal">-->
<!--        <Button margin="5" text="StartsWith" @tap="onStartsWithSelected" />-->
<!--        <Button margin="5" text="Contains" @tap="onContainsSelected" />-->
<!--      </StackLayout>-->
<!--      <Label text="DISPLAY MODES" />-->
<!--      <StackLayout orientation="horizontal">-->
<!--        <Button margin="5" text="Plain" @tap="onPlainSelected" />-->
<!--        <Button margin="5" text="Tokens" @tap="onTokensSelected" />-->
<!--      </StackLayout>-->
<!--    </StackLayout>-->
<!--  </PageLayout>-->
<!--</template>-->

<!--<script>-->
<!--import { AutoCompleteCompletionMode, AutoCompleteDisplayMode, AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete'-->
<!--import { ObservableArray } from 'tns-core-modules/data/observable-array'-->
<!--import { getCountry, getCountriesCount } from '../data/countries'-->
<!--import * as utils from '~/shared/utils'-->

<!--const description = 'Exemple autocomplete'-->

<!--export default {-->
<!--  name: 'AutocompleteEx',-->
<!--  description,-->
<!--  data () {-->
<!--    const dataItems = new ObservableArray()-->

<!--    for (let i = 0; i < getCountriesCount(); i++) {-->
<!--      dataItems.push(getCountry(i))-->
<!--    }-->
<!--    return {-->
<!--      title: description,-->
<!--      dataItems,-->
<!--      displayMode: AutoCompleteDisplayMode.Tokens,-->
<!--      suggestMode: AutoCompleteSuggestMode.Suggest,-->
<!--      completionMode: AutoCompleteCompletionMode.Contains-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    showDrawer () {-->
<!--      utils.showDrawer()-->
<!--    },-->
<!--    // onNavigationButtonTap () {-->
<!--    //   Frame.topmost().goBack()-->
<!--    // },-->
<!--    onSuggestSelected () {-->
<!--      console.log('onSuggestSelected!')-->
<!--      this.suggestMode = AutoCompleteSuggestMode.Suggest-->
<!--      this.$refs.autocomplete.resetAutoComplete()-->
<!--    },-->
<!--    onAppendSelected () {-->
<!--      console.log('onAppendSelected!')-->
<!--      this.suggestMode = AutoCompleteSuggestMode.Append-->
<!--      this.completionMode = AutoCompleteCompletionMode.StartsWith-->
<!--      this.$refs.autocomplete.resetAutoComplete()-->
<!--    },-->
<!--    onSuggestAppendSelected () {-->
<!--      console.log('onSuggestAppendSelected')-->
<!--      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend-->
<!--      this.completionMode = AutoCompleteCompletionMode.StartsWith-->
<!--      this.$refs.autocomplete.resetAutoComplete()-->
<!--    },-->
<!--    onStartsWithSelected () {-->
<!--      console.log('onStartsWithSelected')-->
<!--      this.completionMode = AutoCompleteCompletionMode.StartsWith-->
<!--      this.$refs.autocomplete.resetAutoComplete()-->
<!--    },-->
<!--    onContainsSelected () {-->
<!--      console.log('onContainsSelected')-->
<!--      this.completionMode = AutoCompleteCompletionMode.Contains-->
<!--      this.suggestMode = AutoCompleteSuggestMode.Suggest-->
<!--      this.$refs.autocomplete.resetAutoComplete()-->
<!--    },-->
<!--    onPlainSelected () {-->
<!--      console.log('onPlainSelected')-->
<!--      this.displayMode = AutoCompleteDisplayMode.Plain-->
<!--      this.$refs.autocomplete.resetAutoComplete()-->
<!--    },-->
<!--    onTokensSelected () {-->
<!--      console.log('onTokensSelected')-->
<!--      this.displayMode = AutoCompleteDisplayMode.Tokens-->
<!--      this.$refs.autocomplete.resetAutoComplete()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
