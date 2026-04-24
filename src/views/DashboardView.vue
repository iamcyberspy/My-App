<script setup lang="ts">
import { Users, Bolt, TrendingUp, MonitorCheck, Menu, User, LayoutDashboard, BarChart3, Settings } from 'lucide-vue-next'
import { ref } from 'vue'

const isSidebarOpen = ref(false)

const team = [
  {
    name: 'Sarah Jensen',
    email: 'sarah.j@nexusapp.io',
    role: 'หัวหน้าทีมอาวุโส',
    department: 'ออกแบบผลิตภัณฑ์',
    lastActive: '2 นาทีที่แล้ว',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2vU8yoA6FkP-1BBWjuHVme6r-2Kwsa7cSslhADWYJZuWDo4dUAYADybWQ3bRnCVVLQuj9RxO45CuChPfFLa7V3LYq_8ufwT3NU5an7_EEJXEiWhPdclesUNjkCj_t6wuiaayVmF38T1V0xcFq-Fsikbn8VBC6DKQUCgjSW8JGReGpqAFTvFmUc3lVegA3dCrObxIiQi982Tahdi1ztNMG7EnUEyPW8qPVTXl9MIV6lK-wnXkUcOFWewpoRbn0Tliym3VRysDEmWo-'
  },
  {
    name: 'Michael Chen',
    email: 'm.chen@nexusapp.io',
    role: 'สถาปนิก',
    department: 'วิศวกรรม',
    lastActive: '1 ชั่วโมงที่แล้ว',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABW6P02uXBgCdpcEqB1iYhokSlKUpiPpk3TnCGUeecwAx8PdKF-nDPkOW41HFrdFqlUTqkYNBpx2g6vbU_cfnMUrlJR1eYuUXeXmuQxa0qpwMY_f8em3dJKsZVZzw3PkO7wAOsdkDwXYc4O4O-SRSO8mCJ84z4iMiVjg0j6ZUQY44GxPMVlWsg_vEpV0Vx6lrVvw0B148fioqDa41prcsFbAODTspjxZtPwgwIbdwRONn-2RcrGrUOyHhSGO5LCmUUPKtmkFQLPKYe'
  },
  {
    name: 'Elena Rodriguez',
    email: 'elena.r@nexusapp.io',
    role: 'นักวิเคราะห์',
    department: 'การตลาด',
    lastActive: 'เมื่อวานนี้',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsk1HGnRYnC4jgFt4fwYOMwkZsG86ZJGbuJGIc_ao0oeNEMt0gkq7x9pPgM4RMlcmL_DUzaRk6YawpwE6vcL6lEFzR6un0LmOxlEop31CuC46F2HqtGQRpK4FdcMj7X1ly2qGuIZ7qSzIicB4dWhRkHiE-IRIWFINb0plCRp_5XpCKFbM1uozgu7QLpb6LamIuMbmH31D36yyuYtXnD3JlcFeqq7GYNk3w52JcR8di3YhJYZmMFOsSbfvMU2dxV7MOap1pK-3nGjA3'
  }
]
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
      class="fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-950 z-[70] shadow-2xl flex flex-col transition-transform duration-300"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:shadow-none lg:border-r lg:border-surface-container-high'"
    >
      <div class="h-16 flex items-center px-6 border-b border-surface-container-high">
        <span class="text-xl font-bold tracking-tight text-primary">NexusApp</span>
        <button class="lg:hidden ml-auto p-2" @click="isSidebarOpen = false">
          <Menu class="text-on-surface-variant" />
        </button>
      </div>
      
      <nav class="flex-grow py-6 px-4 flex flex-col gap-1">
        <router-link to="/dashboard" class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
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
        <router-link to="/profile" class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
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

    <!-- Main Content -->
    <div class="lg:ml-72 flex flex-col flex-grow">
      <header class="bg-white/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-surface-container-high h-16 flex items-center px-6 md:px-12">
        <button class="lg:hidden p-2 mr-4" @click="isSidebarOpen = true">
          <Menu class="text-on-surface" />
        </button>
        <div class="flex-grow"></div>
        <div class="flex items-center gap-4">
          <router-link to="/profile" class="w-8 h-8 rounded-full overflow-hidden border border-surface-container-high">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwE98zYNmOVaAHFMw-ggFuuJBWHZ9Plv2SYkQV9znOAsDzdPCS4NWxS26ShfstknjKxuWAQC2lir1i9hqwp5cyY4Z9_xi9ksuNI7mUfiCLyeo7GGMX_YDIND7YSZqS3iI_HTXWHKF5vt-xWCUpJQW_E9dT6is2mzf41F-wpBbwKb-tWhqPRVotoV9u78pZNsQCyZ3j5f8yGZeJut0WmMkbubgl62lxF4OUlQUJJ0r7vJ_dgFBL47wzS7DpzXumOkyw2VFLfAFnLXSl" alt="Profile" class="w-full h-full object-cover" />
          </router-link>
        </div>
      </header>

      <main class="p-6 md:p-12 max-w-screen-2xl">
        <section class="mb-12">
          <h1 class="text-4xl font-bold text-on-surface mb-2">ยินดีต้อนรับกลับมา</h1>
          <p class="text-on-surface-variant">นี่คือสิ่งที่เกิดขึ้นในพื้นที่ทำงานของคุณวันนี้</p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white p-6 rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-on-surface-variant">ผู้ใช้งาน</span>
              <Users class="text-primary" :size="20" />
            </div>
            <div class="text-3xl font-bold text-on-surface mb-2">1,284</div>
            <div class="flex items-center gap-1 text-primary text-xs">
              <TrendingUp :size="14" />
              <span>+12% จากเดือนที่แล้ว</span>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-on-surface-variant">สถานะ</span>
              <Bolt class="text-tertiary-container" :size="20" />
            </div>
            <div class="text-3xl font-bold text-on-surface mb-2">กำลังใช้งาน</div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="text-xs text-on-surface-variant">ระบบทั้งหมดทำงานปกติ</span>
            </div>
          </div>
          
          <div class="bg-primary p-6 rounded-xl shadow-md hover:bg-primary-container transition-colors text-white">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium opacity-80">การมีส่วนร่วม</span>
              <MonitorCheck :size="20" />
            </div>
            <div class="text-3xl font-bold mb-2">89.4%</div>
            <div class="text-xs opacity-80">ตัวชี้วัดประสิทธิภาพแบบเรียลไทม์</div>
          </div>
        </section>

        <section class="bg-white rounded-xl border border-surface-container-high shadow-sm overflow-hidden">
          <div class="px-6 py-4 border-b border-surface-container-high flex justify-between items-center bg-surface-container-lowest">
            <h3 class="text-lg font-bold text-on-surface">รายชื่อทีม</h3>
            <button class="bg-surface-container-low text-primary text-sm font-medium px-4 py-2 rounded-full hover:bg-surface-container-high transition-colors">ดูทั้งหมด</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="bg-surface-container-low/50">
                  <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">ชื่อ</th>
                  <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">บทบาท</th>
                  <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">แผนก</th>
                  <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">ใช้งานล่าสุด</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-surface-container-high">
                <tr v-for="member in team" :key="member.email" class="hover:bg-primary/5 transition-colors group">
                  <td class="px-6 py-4 flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-surface-container-low overflow-hidden shadow-sm">
                      <img :src="member.avatar" :alt="member.name" class="w-full h-full object-cover">
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-on-surface">{{ member.name }}</p>
                      <p class="text-xs text-on-surface-variant">{{ member.email }}</p>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm text-on-surface-variant">{{ member.role }}</td>
                  <td class="px-6 py-4 text-sm text-on-surface-variant">{{ member.department }}</td>
                  <td class="px-6 py-4 text-xs text-on-surface-variant">{{ member.lastActive }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer class="mt-auto border-t border-surface-container-high py-8">
        <div class="px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <span>© 2024 NexusApp. สงวนลิขสิทธิ์ทั้งหมด</span>
          <div class="flex gap-6">
            <a href="#" class="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" class="hover:text-primary transition-colors">ข้อกำหนดการให้บริการ</a>
            <a href="#" class="hover:text-primary transition-colors">ศูนย์ช่วยเหลือ</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
