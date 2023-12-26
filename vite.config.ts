import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
    return {
        base: env.VITE_APP_NAME,
        build: {
            outDir: 'dist/' + env.VITE_APP_NAME, // 设置打包路径
        },
        plugins: [
            vue(),
            vueJsx(),
            Components({
                resolvers: [
                    AntDesignVueResolver({
                        // 新的配置
                        importStyle: 'less',
                    }),
                ],
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        'ant-prefix': env.VITE_APP_NAME,
                        'primary-color': '#3471FF',
                        'border-radius-base': '4px',
                        'error-color': '#FF4A47',
                    },
                    javascriptEnabled: true,
                },
                // scss: {
                //   additionalData: '@import "@/assets/styles/variables.module.scss";',
                // }
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
            },
        },
        server: {
            port: 4000, // 设置服务启动端口号
            open: true, // 设置服务启动时是否自动打开浏览器
            cors: true, // 允许跨域

            // 设置代理，根据我们项目实际情况配置
            // proxy: {
            //   '/api': {
            //     target: 'http://xxx.xxx.xxx.xxx:8000',
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace('/api/', '/')
            //   }
            // }
        },
    };
});
