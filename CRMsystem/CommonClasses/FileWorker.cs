using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace CRMsystem.CommonClasses
{
    public static class FileWorker
    {
        /// <summary>
        /// Создает каталог для ресурсов компании
        /// </summary>
        /// <param name="companyName">Название компании</param>
        /// <returns>Создан ли каталог</returns>
        public static bool CreateCompanyRepo(string companyName)
        {
            string filePath = AppDomain.CurrentDomain.BaseDirectory + "Resources\\Companies\\" + companyName;
            
            if (!Directory.Exists(filePath))
            {
                Directory.CreateDirectory(filePath);
                Directory.CreateDirectory(filePath + "\\database");
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// Получение пути к каталогу компании
        /// </summary>
        /// <param name="companyName">Название компании</param>
        /// <returns>Физический путь к каталогу компании</returns>
        public static string GetCompanyCatalogPhysicalPath(string companyName)
        {
            return AppDomain.CurrentDomain.BaseDirectory + "Resources\\Companies\\" + companyName;
        }
    }
}