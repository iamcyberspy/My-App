<script setup lang="ts">
import { ref } from 'vue'
import { Camera, Edit3, Save, Shield, Bell, Menu, User, LayoutDashboard, BarChart3, Settings, Users } from 'lucide-vue-next'

const isSidebarOpen = ref(false)
const name = ref('Alex Thompson')
const email = ref('alex.thompson@nexus.app')
const newPassword = ref('')
const confirmPassword = ref('')

const handleSave = () => {
  alert('บันทึกการเปลี่ยนแปลงเรียบร้อยแล้ว')
}
</script>

<template>
  <div class="bg-surface min-h-screen flex flex-col">
    <!-- Mobile Sidebar Backdrop -->
    <div 
      v-if="isSidebarOpen" 
      class="fixed inset-0 z-[60] bg-black/50" 
      @click="isSidebarOpen = false"
    ></div>
    
    <!-- Sidebar -->
    <aside 
      class="fixed top-0 left-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:shadow-none lg:border-r lg:border-surface-container-high'"
    >
      <div class="h-16 flex items-center px-6 border-b border-surface-container-high">
        <span class="text-xl font-bold tracking-tight text-primary">NexusApp</span>
        <button class="lg:hidden ml-auto p-2" @click="isSidebarOpen = false">
          <Menu class="text-on-surface-variant" />
        </button>
      </div>
      
      <nav class="flex-grow py-6 px-4 flex flex-col gap-1">
        <router-link to="/dashboard" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
          <LayoutDashboard :size="20" />
          <span>แดชบอร์ด</span>
        </router-link>
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
          <BarChart3 :size="20" />
          <span>การวิเคราะห์</span>
        </a >
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
          <Users :size="20" />
          <span>ทีม</span>
        </a >
        <router-link to="/profile" class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
          <User :size="20" />
          <span>โปรไฟล์</span>
        </router-link>
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
          <Settings :size="20" />
          <span>การตั้งค่า</span>
        </a >
      </nav>
      
      <div class="p-6 border-t border-surface-container-high">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-surface-container-low overflow-hidden border border-surface-container-high">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwE98zYNmOVaAHFMw-ggFuuJBWHZ9Plv2SYkQV9znOAsDzdPCS4NWxS26ShfstknjKxuWAQC2lir1i9hqwp5cyY4Z9_xi9ksuNI7mUfiCLyeo7GGMX_YDIND7YSZqS3iI_HTXWHKF5vt-xWCUpJQW_E9dT6is2mzf41F-wpBbwKb-tWhqPRVotoV9u78pZNsQCyZ3j5f8yGZeJut0WmMkbubgl62lxF4OUlQUJJ0r7vJ_dgFBL47wzS7DpzXumOkyw2VFLfAFnLXSl" alt="Profile" class="w-full h-full object-cover" />
          </div>
          <div>
            <p class="text-sm font-semibold text-on-surface">Alex Thompson</p>
            <p class="text-xs text-on-surface-variant">Admin</p>
          </div>
        </div>
      </div>
    </aside>

    <div class="lg:ml-72 flex flex-col flex-grow">
      <header class="bg-white/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-surface-container-high h-16 flex items-center px-6 md:px-12">
        <button class="lg:hidden p-2 mr-4" @click="isSidebarOpen = true">
          <Menu class="text-on-surface" />
        </button>
        <div class="flex-grow"></div>
      </header>

      <main class="flex-grow py-12 px-6 flex flex-col items-center">
        <!-- Profile Header -->
        <section class="text-center mb-12">
          <div class="relative inline-block">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 bg-surface-container-low">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnu_GA6LZh4FF0k72IT3HRgauHyRuNSqW5SV5JWaIr9pNtKsphDiaxvz7LVZRdDAipd2V4c0h7HxHARONzE4Ga5YDv02MQl10ZSMC3HM2GIw-VELaMVXdAfnoPwaiVfVS6B7rwzfQ7Ht0PwBTocC1k1JeMqrhk-QgLRbPafH-tSYQrTiNNNr5CvSucEx1m8kzMXjeCBQnxBzjc3L3urkD8vZZQExw7MdbKZdNCZ94GLj1rfr_MhIzW7aYFsKfmjrtRM2Yb1g76Cu7v" alt="Profile" class="w-full h-full object-cover">
            </div>
            <button class="absolute bottom-6 right-2 bg-primary text-on-primary p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 border-2 border-white">
              <Camera :size="16" />
            </button>
          </div>
          <h1 class="text-3xl font-bold text-on-surface mb-2">{{ name }}</h1>
          <p class="text-on-surface-variant italic">{{ email }}</p>
        </section>

        <!-- Edit Form -->
        <section class="w-full max-w-xl bg-white rounded-3xl p-8 border border-surface-container-high shadow-lg">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Edit3 :size="20" />
            </div>
            <h2 class="text-xl font-bold text-on-surface">แก้ไขโปรไฟล์</h2>
          </div>

          <form @submit.prevent="handleSave" class="space-y-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-on-surface block px-1" for="name">ชื่อ-นามสกุล</label>
              <input 
                v-model="name"
                class="w-full bg-surface-container-low border border-transparent rounded-2xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary text-base transition-all outline-none" 
                id="name" 
                type="text"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-on-surface block px-1" for="email">ที่อยู่อีเมล</label>
              <input 
                :value="email"
                class="w-full bg-surface-container-high/50 border border-transparent rounded-2xl px-4 py-3.5 text-on-surface-variant cursor-not-allowed outline-none" 
                disabled 
                id="email" 
                type="email"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-on-surface block px-1" for="new-password">รหัสผ่านใหม่</label>
                <input 
                  v-model="newPassword"
                  class="w-full bg-surface-container-low border border-transparent rounded-2xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary text-base transition-all outline-none" 
                  id="new-password" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-on-surface block px-1" for="confirm-password">ยืนยันรหัสผ่าน</label>
                <input 
                  v-model="confirmPassword"
                  class="w-full bg-surface-container-low border border-transparent rounded-2xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary text-base transition-all outline-none" 
                  id="confirm-password" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
            </div>

            <div class="pt-6 border-t border-surface-container-high mt-8 flex flex-col gap-6">
              <p class="text-xs text-on-surface-variant text-center md:text-left">อัปเดตล่าสุด: 24 ตุลาคม 2024 ที่อยู่อีเมลของคุณไม่สามารถเปลี่ยนได้หากไม่มีการยืนยันความปลอดภัย</p>
              <button 
                class="w-full bg-primary text-on-primary font-bold px-10 py-4 rounded-full hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-2" 
                type="submit"
              >
                <Save :size="18" />
                บันทึกการเปลี่ยนแปลง
              </button>
            </div>
          </form>
        </section>

        <!-- Actions -->
        <section class="w-full max-w-xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white p-6 rounded-3xl border border-surface-container-high flex items-center gap-4 hover:border-primary/30 transition-all cursor-pointer group hover:shadow-md">
            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Shield :size="24" />
            </div>
            <div>
              <p class="font-bold text-on-surface">ความปลอดภัย</p>
              <p class="text-xs text-on-surface-variant">ตั้งค่าการเข้าถึงและการยืนยันตัวตน</p>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-3xl border border-surface-container-high flex items-center gap-4 hover:border-primary/30 transition-all cursor-pointer group hover:shadow-md">
            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Bell :size="24" />
            </div>
            <div>
              <p class="font-bold text-on-surface">การแจ้งเตือน</p>
              <p class="text-xs text-on-surface-variant">คุณมี 3 รายการใหม่ที่ยังไม่ได้อ่าน</p>
            </div>
          </div>
        </section>
      </main>

      <footer class="py-10 border-t border-surface-container-high bg-white">
        <div class="px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <span>© 2024 NexusApp. สงวนลิขสิทธิ์ทั้งหมด</span>
          <div class="flex gap-8">
            <a href="#" class="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" class="hover:text-primary transition-colors">ข้อกำหนดการให้บริการ</a>
            <a href="#" class="hover:text-primary transition-colors">ศูนย์ช่วยเหลือ</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
