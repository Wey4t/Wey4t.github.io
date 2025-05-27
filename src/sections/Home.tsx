import Card from '../components/Card'
import Mouse from '../components/Mouse';
import { Github, Linkedin, Mail, ExternalLink, Monitor } from 'lucide-react';

export const Home = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="home"
        className="lg:snap-start h-[calc(100vh-4rem)] relative"
      >
        <div className="w-full h-full flex justify-center items-center p-4">
          <Card className="p-8 mb-8 max-w-4xl w-full">
            <div className="flex flex-col items-start mb-6 w-full overflow-hidden">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500 text-white px-4 py-2 font-bold text-sm font-mono border-2 border-orange-600 shadow-lg rounded-sm">
                  ESC
                </div>
                <div className="bg-gray-200 text-gray-700 px-4 py-2 font-bold text-sm font-mono border-2 border-gray-300 shadow-md rounded-sm">
                  F1
                </div>
                <div className="bg-gray-200 text-gray-700 px-4 py-2 font-bold text-sm font-mono border-2 border-gray-300 shadow-md rounded-sm">
                  F2
                </div>
              </div>

              <div className="flex flex-wrap items-end gap-2 sm:gap-4 mb-4">
                <div className="bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lg p-3 sm:p-4 hover:bg-gray-200 transition-all">
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono font-bold text-gray-700">
                    Hey,
                  </span>
                </div>
                <div className="bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lg p-3 sm:p-4 hover:bg-gray-200 transition-all">
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono font-bold text-gray-700">
                    I'm
                  </span>
                </div>

                <div className="bg-orange-500 border-2 border-orange-600 rounded-lg shadow-xl p-4 sm:p-6 md:p-8 hover:bg-orange-600 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-gradient-to-b from-white via-transparent to-black"></div>
                  </div>
                  
                  <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold text-white relative z-10">
                    Jiawei
                  </span>
                </div>
              </div>

              {/* status */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wide">ACTIVE</span>
                
                <div className="w-3 h-3 bg-blue-500 rounded-full ml-4 animate-pulse"></div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wide">ONLINE</span>
                
                <div className="w-3 h-3 bg-orange-500 rounded-full ml-4 animate-pulse"></div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wide">CODING</span>
              </div>
            </div>

            
            
            <div className="mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-mono max-w-3xl">
              Computer Science connects my love of pure problem-solving and finding practical and creative solutions to real-life problems. Whether discovering new techniques or applying old and trusted methods, I can never get enough of solving interesting challenges. 
              </p>
            </div>
          </Card>
        </div>
        <Mouse/>
      </section>
      {/* Contact Section */}
      <section 
      id="contact" 
        className="lg:snap-start h-[calc(100vh-4rem)] relative">
        <div className="w-full h-full flex justify-center items-center p-4">

          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">CONTACT</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Contact description...
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <Card className="p-4 hover:bg-orange-500 hover:text-white transition-all text-center cursor-pointer">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-sm">EMAIL</div>
              </Card>
              <Card className="p-4 hover:bg-orange-500 hover:text-white transition-all text-center cursor-pointer">
                <Linkedin className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-sm">LINKEDIN</div>
              </Card>
              <Card className="p-4 hover:bg-orange-500 hover:text-white transition-all text-center cursor-pointer">
                <Github className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-sm">GITHUB</div>
              </Card>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default Home;