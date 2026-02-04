import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, Award, Calendar, Trophy, Info, Users } from 'lucide-react';

// 罗西职业生涯数据
const championshipData = [
  { year: 1997, category: '125cc', team: 'Aprilia', color: '#F4D03F' },
  { year: 1999, category: '250cc', team: 'Aprilia', color: '#F4D03F' },
  { year: 2001, category: '500cc', team: 'Honda', color: '#E63946' },
  { year: 2002, category: 'MotoGP', team: 'Honda', color: '#E63946' },
  { year: 2003, category: 'MotoGP', team: 'Honda', color: '#E63946' },
  { year: 2004, category: 'MotoGP', team: 'Yamaha', color: '#219EBC' },
  { year: 2005, category: 'MotoGP', team: 'Yamaha', color: '#219EBC' },
  { year: 2008, category: 'MotoGP', team: 'Yamaha', color: '#219EBC' },
  { year: 2009, category: 'MotoGP', team: 'Yamaha', color: '#219EBC' },
];

// 冠军统计数据
const statsData = [
  { name: '125cc', value: 1 },
  { name: '250cc', value: 1 },
  { name: '500cc', value: 1 },
  { name: 'MotoGP', value: 6 },
];

// 图片数据
const galleryImages = [
  "https://www.valentinorossi.com/util/image.php?width=742&height=495&cropratio=742:495&image=https://www.valentinorossi.com/images/Sepang2016day2A.jpg",
  "https://www.valentinorossi.com/util/image.php?width=742&height=495&cropratio=742:495&image=https://www.valentinorossi.com/images/gallery/463/3.jpg",
  "https://www.valentinorossi.com/util/image.php?width=742&height=495&cropratio=742:495&image=https://www.valentinorossi.com/images/gallery/465/101.jpg",
  "https://www.valentinorossi.com/util/image.php?width=742&height=495&cropratio=742:495&image=https://www.valentinorossi.com/images/gallery/465/105.jpg",
];

// 制造商颜色映射
const teamColors = {
  'Aprilia': '#F4D03F',
  'Honda': '#E63946',
  'Yamaha': '#219EBC',
  'Nastro Azzurro': '#006400'
};

export default function ValentinoRossiPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* 导航栏 */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold flex items-center"
          >
            <span className="text-[#F4D03F] mr-1">46</span>
            <span>ROSSI</span>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('intro')} className="text-gray-300 hover:text-[#F4D03F] transition-colors">简介</button>
            <button onClick={() => scrollToSection('achievements')} className="text-gray-300 hover:text-[#F4D03F] transition-colors">冠军时刻</button>
            <button onClick={() => scrollToSection('stats')} className="text-gray-300 hover:text-[#F4D03F] transition-colors">数据统计</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-[#F4D03F] transition-colors">传奇瞬间</button>
          </div>
          <div className="block md:hidden">
            <button className="text-white">
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Valentino%20Rossi%20riding%20motorcycle%20on%20racetrack%20with%20speed%20blur%20background&sign=f941997099a05e31052b631184d98d26" 
            alt="Valentino Rossi" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-gray-900"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-[#F4D03F] flex items-center justify-center text-black font-bold text-3xl border-4 border-white">
                9
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              <span className="text-[#F4D03F]">VALENTINO</span> ROSSI
            </h1>
            <div className="text-xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-[#F4D03F] to-[#E63946] text-transparent bg-clip-text">
              九冠王传奇
            </div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
              历史上唯一一位在125cc、250cc、500cc和MotoGP四个组别均获得世界冠军的车手
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('intro')}
              className="bg-[#F4D03F] text-black font-bold py-3 px-8 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-[#F4D03F]/30"
            >
              探索他的传奇生涯
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('intro')}
        >
          <ChevronDown size={36} className="text-white/70" />
        </motion.div>
      </motion.header>

      {/* 简介区域 */}
      <section id="intro" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              <span className="text-[#F4D03F]">传奇人物</span>背后的故事
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://www.valentinorossi.com/images/background-footer.jpg" 
                    alt="Valentino Rossi 肖像" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <div className="text-4xl font-bold text-[#F4D03F]">46</div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="font-bold text-[#F4D03F] text-xl">9次世界冠军得主</span> Valentino Rossi 不仅仅是一位摩托车赛车手；他是全球体育偶像，MotoGP的活着的传奇。他极具魅力的个性和无与伦比的赛车技巧使他成为赛车运动历史上最受喜爱的人物之一。
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Rossi 是<span className="font-bold text-white">历史上唯一一位在四个不同组别均获得世界冠军的车手</span>：125cc、250cc、500cc和MotoGP。这一非凡成就展示了他的适应能力、技巧和对卓越的不懈追求。
                </p>
                <p className="text-lg leading-relaxed">
                  在他辉煌的职业生涯中，Rossi曾为<span className="font-bold text-white">四家不同的制造商</span>效力并赢得冠军：Aprilia、Honda、Yamaha和Nastro Azzurro。他与其他顶级车手的竞争以及他始终保持最高水平表现的能力，使他成为有史以来最伟大的摩托车赛车手之一。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 荣誉时间线 */}
      <section id="achievements" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-[#E63946]">冠军</span>时间线
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* 中央线 */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F4D03F] via-[#E63946] to-[#F4D03F] transform -translate-x-1/2 hidden md:block"></div>
              
              {/* 时间线项目 */}
              {championshipData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`mb-0 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: item.color }}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold" style={{ color: item.color }}>{item.category}</h3>
                        <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">{item.year}年</span>
                      </div>
                      <p className="text-gray-300 flex items-center justify-end">
                        <Users size={16} className="mr-1" /> {item.team}车队
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full z-10" style={{ backgroundColor: item.color }}>
                    <Trophy size={16} className="text-white" />
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block bg-gray-800 p-6 rounded-xl shadow-lg border border-[#F4D03F]">
                <div className="flex items-center justify-center mb-4">
                  <Award size={24} className="text-[#F4D03F] mr-2" />
                  <h3 className="text-2xl font-bold text-white">历史性成就</h3>
                </div>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <Info size={18} className="text-[#F4D03F] mr-2 mt-1 flex-shrink-0" />
                    <span>7次顶级组别冠军（1次500cc，6次MotoGP）</span>
                  </li>
                  <li className="flex items-start">
                    <Info size={18} className="text-[#F4D03F] mr-2 mt-1 flex-shrink-0" />
                    <span>二冲程时代最后一位500cc冠军（2001年）</span>
                  </li>
                  <li className="flex items-start">
                    <Info size={18} className="text-[#F4D03F] mr-2 mt-1 flex-shrink-0" />
                    <span>唯一一位与4家不同制造商赢得冠军的车手</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 数据统计区域 */}
      <section id="stats" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-[#F4D03F]">职业</span>数据统计
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* 统计卡片 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 text-center"
              >
                <div className="text-5xl font-bold text-[#F4D03F] mb-4">9</div>
                <div className="text-lg font-semibold mb-2">世界冠军</div>
                <div className="text-gray-400">横跨4个不同组别</div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 text-center"
              >
                <div className="text-5xl font-bold text-[#E63946] mb-4">7</div>
                <div className="text-lg font-semibold mb-2">顶级组别冠军</div>
                <div className="text-gray-400">1次500cc，6次MotoGP</div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 text-center"
              >
                <div className="text-5xl font-bold text-white mb-4">4</div>
                <div className="text-lg font-semibold mb-2">制造商</div>
                <div className="text-gray-400">Aprilia、Honda、Yamaha、Nastro Azzurro</div>
              </motion.div>
            </div>
            
            {/* 冠军分类图表 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-center">各组别冠军数量</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={statsData} layout="vertical" margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
                    <XAxis type="number" domain={[0, 'dataMax + 1']} />
                    <YAxis dataKey="name" type="category" tick={{ fill: 'white' }} width={80} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', borderRadius: '0.5rem' }}
                      itemStyle={{ color: 'white' }}
                      formatter={(value) => [`${value} 个冠军`, '总计']}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {statsData.map((entry, index) => (
                        <motion.cell 
                          key={`cell-${index}`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                          fill={index === 0 ? '#F4D03F' : index === 1 ? '#F4D03F' : index === 2 ? '#E63946' : '#219EBC'} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 相册区域 */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-[#E63946]">传奇</span>瞬间
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="relative group rounded-xl overflow-hidden shadow-lg aspect-video"
                >
                  <img 
                    src={image} 
                    alt={`Valentino Rossi 精彩瞬间 ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <div className="text-xl font-bold">传奇瞬间 #{index + 1}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="text-2xl font-bold">
              <span className="text-[#F4D03F]">46</span> ROSSI
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            致敬九冠王和MotoGP传奇
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#F4D03F] transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-[#F4D03F] transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-[#F4D03F] transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-[#F4D03F] transition-colors">YouTube</a>
          </div>
          <div className="mt-12 text-gray-500 text-sm">
            © {new Date().getFullYear()} Valentino Rossi 粉丝页面 | 为"医生"的激情而创作
          </div>
        </div>
      </footer>
    </div>
  );
}