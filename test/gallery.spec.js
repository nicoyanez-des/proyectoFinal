import { mount } from '@vue/test-utils'

import galleryProyect from '@/pages/galleryProyect.vue'


describe('galleryProyect', ()=>{
    test('Es una instancia de Vue', ()=>{
        const wrapper = mount(galleryProyect)
        expect(wrapper.vm).toBeTruthy()
    })
})