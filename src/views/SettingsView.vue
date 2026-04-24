<script setup lang="ts">
import { ref } from 'vue'
import { 
  Settings, 
  Bolt,
  Bell, 
  Shield, 
  Moon, 
  Sun, 
  Globe, 
  Mail, 
  Smartphone, 
  LogOut, 
  Menu, 
  User, 
  LayoutDashboard, 
  BarChart3, 
  Users 
} from 'lucide-vue-next'

const isSidebarOpen = ref(false)

// Settings State
const emailNotifications = ref(true)
const pushNotifications = ref(false)
const twoFactorAuth = ref(false)
const selectedTheme = ref('light')
const selectedLanguage = ref('th')

const saveSettings = () => {
  alert('บันทึกการตั้งค่าเรียบร้อยแล้ว')
}
</script>

<template>
  <div class="min-h-screen bg-surface-container-lowest flex font-sans text-on-surface">
    <!-- Mobile Sidebar Backdrop -->
    <div 
      v-if="isSidebarOpen" 
      class="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
      @click="isSidebarOpen = false"
    ></div>

    <!-- Sidebar Navigation -->
    <aside 
      class="fixed inset-y-0 left-0 w-72 bg-white border-r border-surface-container-high z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-8 flex items-center gap-4 border-b border-surface-container-high">
        <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
          <Bolt class="text-on-primary w-6 h-6" />
        </div>
        <span class="text-2xl font-black tracking-tight text-primary">NexusApp</span>
      </div>

      <nav class="p-6 space-y-2">
        <router-link to="/dashboard" class="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-on-surface-variant hover:bg-surface-container-low transition-all group">
          <LayoutDashboard :size="20" class="group-hover:text-primary transition-colors" />
          <span class="font-bold">แดชบอร์ด</span>
        </router-link>
        <router-link to="/dashboard" class="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-on-surface-variant hover:bg-surface-container-low transition-all group">
          <Users :size="20" class="group-hover:text-primary transition-colors" />
          <span class="font-bold">ทีมงาน</span>
        </router-link>
        <router-link to="/profile" class="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-on-surface-variant hover:bg-surface-container-low transition-all group">
          <User :size="20" class="group-hover:text-primary transition-colors" />
          <span class="font-bold">โปรไฟล์</span>
        </router-link>
        <router-link to="/settings" class="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-primary text-on-primary shadow-md shadow-primary/20 transition-all">
          <Settings :size="20" />
          <span class="font-bold">ตั้งค่า</span>
        </router-link>
      </nav>

      <div class="absolute bottom-0 w-full p-6 border-t border-surface-container-high bg-white">
        <router-link to="/" class="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-error hover:bg-error-container/20 transition-all font-bold">
          <LogOut :size="20" />
          <span>ออกจากระบบ</span>
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
      <header class="h-20 bg-white border-b border-surface-container-high flex items-center justify-between px-6 md:px-12 flex-shrink-0">
        <div class="flex items-center gap-4">
          <button @click="isSidebarOpen = true" class="lg:hidden p-2 hover:bg-surface-container-low rounded-xl">
            <Menu :size="24" />
          </button>
          <h1 class="text-xl font-bold text-on-surface">การตั้งค่าระบบ</h1>
        </div>
        <button @click="saveSettings" class="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
          <span>บันทึก</span>
        </button>
      </header>

      <main class="flex-grow overflow-y-auto p-6 md:p-12">
        <div class="max-w-4xl mx-auto space-y-8 pb-12">
          
          <!-- Notifications Section -->
          <section class="bg-white rounded-3xl border border-surface-container-high shadow-lg overflow-hidden">
            <div class="px-8 py-6 border-b border-surface-container-high flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-primary">
                <Bell :size="20" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-on-surface">การแจ้งเตือน</h3>
                <p class="text-xs text-on-surface-variant">ตั้งค่าการรับข่าวสารจากระบบ</p>
              </div>
            </div>
            <div class="p-8 space-y-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                    <Mail :size="20" />
                  </div>
                  <div>
                    <p class="font-bold text-on-surface">การแจ้งเตือนทางอีเมล</p>
                    <p class="text-sm text-on-surface-variant">ส่งข้อมูลอัปเดตไปยังอีเมลของคุณ</p>
                  </div>
                </div>
                <button 
                  @click="emailNotifications = !emailNotifications"
                  class="w-12 h-6 rounded-full transition-colors relative"
                  :class="emailNotifications ? 'bg-primary' : 'bg-surface-container-high'"
                >
                  <div 
                    class="absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm"
                    :class="emailNotifications ? 'left-7' : 'left-1'"
                  ></div>
                </button>
              </div>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-on-surface-variant">
                    <Smartphone :size="20" />
                  </div>
                  <div>
                    <p class="font-bold text-on-surface">การแจ้งเตือนบนเบราว์เซอร์</p>
                    <p class="text-sm text-on-surface-variant">แสดงข้อความแจ้งเตือนทันที</p>
                  </div>
                </div>
                <button 
                  @click="pushNotifications = !pushNotifications"
                  class="w-12 h-6 rounded-full transition-colors relative"
                  :class="pushNotifications ? 'bg-primary' : 'bg-surface-container-high'"
                >
                  <div 
                    class="absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm"
                    :class="pushNotifications ? 'left-7' : 'left-1'"
                  ></div>
                </button>
              </div>
            </div>
          </section>

          <!-- Security Section -->
          <section class="bg-white rounded-3xl border border-surface-container-high shadow-lg overflow-hidden">
            <div class="px-8 py-6 border-b border-surface-container-high flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-error-container/20 flex items-center justify-center text-error">
                <Shield :size="20" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-on-surface">ความปลอดภัย</h3>
                <p class="text-xs text-on-surface-variant">ปกป้องบัญชีของคุณ</p>
              </div>
            </div>
            <div class="p-8 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-bold text-on-surface">การยืนยันตัวตนสองชั้น (2FA)</p>
                  <p class="text-sm text-on-surface-variant">เพิ่มความปลอดภัยอีกชั้นในการเข้าสู่ระบบ</p>
                </div>
                <button 
                  @click="twoFactorAuth = !twoFactorAuth"
                  class="px-6 py-2 rounded-xl font-bold transition-all border-2"
                  :class="twoFactorAuth ? 'bg-primary/10 border-primary text-primary' : 'bg-transparent border-surface-container-high text-on-surface-variant'"
                >
                  {{ twoFactorAuth ? 'เปิดใช้งานอยู่' : 'เปิดใช้งาน' }}
                </button>
              </div>
            </div>
          </section>

          <!-- Appearance Section -->
          <section class="bg-white rounded-3xl border border-surface-container-high shadow-lg overflow-hidden">
            <div class="px-8 py-6 border-b border-surface-container-high flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
                <Globe :size="20" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-on-surface">รูปลักษณ์และภาษา</h3>
                <p class="text-xs text-on-surface-variant">ปรับแต่งแอปสำหรับคุณ</p>
              </div>
            </div>
            <div class="p-8 space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                  <p class="text-sm font-bold text-on-surface-variant uppercase tracking-widest px-2">ธีมที่แสดง</p>
                  <div class="flex gap-4">
                    <button 
                      @click="selectedTheme = 'light'"
                      class="flex-1 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3"
                      :class="selectedTheme === 'light' ? 'border-primary bg-primary/5' : 'border-surface-container-high hover:border-surface-container-highest'"
                    >
                      <Sun :size="24" :class="selectedTheme === 'light' ? 'text-primary' : 'text-on-surface-variant'" />
                      <span class="text-sm font-bold" :class="selectedTheme === 'light' ? 'text-primary' : 'text-on-surface'">สว่าง</span>
                    </button>
                    <button 
                      @click="selectedTheme = 'dark'"
                      class="flex-1 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3"
                      :class="selectedTheme === 'dark' ? 'border-primary bg-primary/5' : 'border-surface-container-high hover:border-surface-container-highest'"
                    >
                      <Moon :size="24" :class="selectedTheme === 'dark' ? 'text-primary' : 'text-on-surface-variant'" />
                      <span class="text-sm font-bold" :class="selectedTheme === 'dark' ? 'text-primary' : 'text-on-surface'">มืด</span>
                    </button>
                  </div>
                </div>

                <div class="space-y-4">
                  <p class="text-sm font-bold text-on-surface-variant uppercase tracking-widest px-2">ภาษา</p>
                  <select 
                    v-model="selectedLanguage"
                    class="w-full bg-surface-container-low border border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary text-base font-bold transition-all outline-none cursor-pointer"
                  >
                    <option value="th">ภาษาไทย (Thai)</option>
                    <option value="en">English (US)</option>
                    <option value="jp">日本語 (Japanese)</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  </div>
</template>
