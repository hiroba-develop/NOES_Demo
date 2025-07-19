import React from 'react';

const teamMembers = [
  {
    name: '鈴木 健太',
    role: 'アカウントマネージャー (営業担当)',
    bio: 'お客様のビジネスの成長をITの側面から全力でサポートします。どんな些細なことでも、まずはお気軽にご相談ください。趣味は週末のキャンプです。',
    avatar: '/avatar_male.png'
  },
  {
    name: '高橋 美咲',
    role: 'テクニカルサポートリーダー',
    bio: '技術的な問題が発生した際の「最後の砦」として、迅速かつ的確な解決を心がけています。複雑なトラブルもお任せください。',
    avatar: '/avatar_female.png'
  },
];

const OurTeamPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-primary-blue">お客様担当チーム</h1>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    私たちが、お客様のITに関するあらゆるお悩みをサポートします。お気軽にお声がけください。
                </p>
            </header>

            <div className="flex justify-center gap-12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center hover:scale-105 transition-transform">
                        <img 
                            src={member.avatar} 
                            alt={`${member.name}のアバター`}
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-blue"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
                        <p className="text-primary-blue font-semibold mb-4">{member.role}</p>
                        <p className="text-gray-600 text-left">
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeamPage; 