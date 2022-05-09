import { mount } from '@vue/test-utils'
import upDateWork from '@/components/upDateWork.vue'


describe('upDateWork', ()=>{
    test('Es una instancia de Vue', ()=>{
        const wrapper = mount(upDateWork)
        expect(wrapper.vm).toBeTruthy()
    })
})

