<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Simulate login
  router.push('/dashboard')
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-gutter py-16 bg-surface-container-low">
    <div class="w-full max-w-[440px] flex flex-col gap-10">
      <div class="flex flex-col items-center gap-3">
        <h1 class="text-4xl font-bold text-primary text-center tracking-tight">NexusApp</h1>
        <p class="text-on-surface-variant text-center px-4">ยินดีต้อนรับกลับมา กรุณากรอกข้อมูลของคุณเพื่อเข้าสู่ระบบ</p>
      </div>
      
      <div class="bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-[0px_24px_48px_-12px_rgba(0,0,0,0.08)] border border-surface-container-high">
        <form @submit.prevent="handleLogin" class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-on-surface-variant ml-1" for="email">อีเมล</label>
            <input 
              v-model="email"
              class="w-full h-14 px-4 rounded-lg bg-surface-container-low border border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary text-base placeholder:text-outline-variant transition-all outline-none" 
              id="email" 
              placeholder="name@company.com" 
              type="email"
              required
            />
          </div>
          
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center ml-1">
              <label class="text-sm font-medium text-on-surface-variant" for="password">รหัสผ่าน</label>
              <a class="text-sm font-medium text-primary hover:opacity-70 active:scale-95 transition-all" href="#">ลืมรหัสผ่าน?</a>
            </div>
            <input 
              v-model="password"
              class="w-full h-14 px-4 rounded-lg bg-surface-container-low border border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary text-base placeholder:text-outline-variant transition-all outline-none" 
              id="password" 
              placeholder="••••••••" 
              type="password"
              required
            />
          </div>
          
          <div class="pt-2">
            <button 
              class="w-full h-14 bg-primary text-on-primary font-medium rounded-full hover:bg-opacity-90 hover:shadow-lg active:scale-[0.97] transition-all flex items-center justify-center shadow-md shadow-primary/20" 
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
      </div>
      
      <div class="text-center">
        <p class="text-on-surface-variant">ยังไม่มีบัญชีใช่ไหม? <a class="text-primary font-semibold hover:opacity-70 active:scale-95 transition-all inline-block" href="#">สมัครสมาชิกฟรี</a></p>
      </div>
    </div>
  </main>
  
  <footer class="w-full py-10 mt-auto border-t border-surface-container-high bg-surface-container-low/50">
    <div class="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-screen-2xl mx-auto gap-6 text-xs text-on-surface-variant opacity-80">
      <span>© 2024 NexusApp. สงวนลิขสิทธิ์ทั้งหมด</span>
      <div class="flex flex-wrap justify-center gap-x-8 gap-y-2">
        <a class="hover:text-primary transition-all" href="#">นโยบายความเป็นส่วนตัว</a>
        <a class="hover:text-primary transition-all" href="#">ข้อกำหนดการให้บริการ</a>
        <a class="hover:text-primary transition-all" href="#">ศูนย์ช่วยเหลือ</a>
      </div>
    </div>
  </footer>
</template>
